import React, { useState, useEffect } from "react";
import Image from "./image";
import useFetchImage from "../utils/hooks/useFetchImage";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchTerm
  );

  function handleRemove(index) {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  const [showPreview, setShowPreview] = useState(false);

  const debounce = useDebounce();
  function handleInput(e) {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  }

  return (
    <section>
      <div className="my-5">
        <input
          type="text"
          onChange={handleInput}
          className="w-full border rounded shadow p-2"
          placeholder="Search Photos Here"
        />
      </div>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}
      <AnimateSharedLayout>
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          className="flex flex-wrap"
        >
          {images.map((img, index) => (
            <motion.div
              className="w-1/6 p-1 border flex justify-center"
              key={index}
              layoutId={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Image
                show={() => setShowPreview(index)}
                image={img.urls.regular}
                handleRemove={handleRemove}
                index={index}
              />
            </motion.div>
          ))}
        </InfiniteScroll>

        <AnimatePresence>
          {showPreview && (
            <motion.section
              layoutId={showPreview}
              exit={{ opacity: 0, rotate: 360, transition: { duration: 1 } }}
              className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40"
              onClick={() => setShowPreview(false)}
            >
              <div className="bg-white">
                <img
                  src={images[showPreview].urls.regular}
                  className="rounded-lg"
                  width="300"
                  height="auto"
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
      {isLoading && <Loading />}
    </section>
  );
}
