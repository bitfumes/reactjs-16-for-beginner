import React, { useState, useEffect } from "react";
import Image from "./image";
import useFetchImage from "../utils/hooks/useFetchImage";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Images() {
  const [page, setPage] = useState(1);
  const [images, setImages, errors, isLoading] = useFetchImage(page);

  function handleRemove(index) {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function ShowImage() {
    return (
      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        className="flex flex-wrap"
      >
        {images.map((img, index) => (
          <Image
            image={img.urls.regular}
            handleRemove={handleRemove}
            index={index}
            key={index}
          />
        ))}
      </InfiniteScroll>
    );
  }

  return (
    <section>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}
      <ShowImage />
      {isLoading && <Loading />}
    </section>
  );
}
