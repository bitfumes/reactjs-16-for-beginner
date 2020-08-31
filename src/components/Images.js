import React, { useState } from "react";
import Image from "./image";
import useFetchImage from "../utils/hooks/useFetchImage";

export default function Images() {
  const [page, setPage] = useState(1);
  const [images, setImages, errors] = useFetchImage(page);

  function handleRemove(index) {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function ShowImage() {
    return images.map((img, index) => (
      <Image
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ));
  }

  return (
    <section>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}
      <div className="gap-0" style={{ columnCount: 5 }}>
        <ShowImage />
      </div>
      {errors.length === 0 && (
        <button onClick={() => setPage(page + 1)}>Load More</button>
      )}
    </section>
  );
}
