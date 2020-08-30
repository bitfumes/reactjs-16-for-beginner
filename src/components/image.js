import React, { useState } from "react";

export default function Image({ index, image, handleRemove }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="p-1 m-1 border flex justify-center">
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
            isHovering ? "" : "hidden"
          }`}
          onClick={() => handleRemove(index)}
        ></i>
        <img src={image} width="100%" height="auto" />
      </div>
    </div>
  );
}
