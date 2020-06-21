import React, { useEffect, useState } from "react";

export default function Images() {
  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80",
    "https://images.unsplash.com/photo-1547111962-50a04ac74d73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1487537177666-94b1f521631a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1506882741710-98761c574b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1487537177666-94b1f521631a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  ]);

  const [newImageUrl, setNewImageUrl] = useState("");

  function handleRemove(index) {
    // setimages(images.filter((image, i) => i !== index));
    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  const [isHovering, setIsHovering] = useState(false);

  function ShowImage() {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <div className="relative">
            <i
              className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
                isHovering ? "" : "hidden"
              }`}
              onClick={() => handleRemove(index)}
            ></i>
            <img
              src={image}
              width="150"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </div>
        </div>
      );
    });
  }

  function handleAdd() {
    if (newImageUrl !== "") {
      setimages([newImageUrl, ...images]);
      setNewImageUrl("");
    }
  }

  function handleChange(event) {
    setNewImageUrl(event.target.value);
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            type="text"
            className="p-2 border border-gray-800 shadow rounded w-full"
            value={newImageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <button
            disabled={newImageUrl === ""}
            className={`p-2 text-white ml-2 ${
              newImageUrl !== "" ? "bg-green-600" : "bg-green-300"
            }`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
