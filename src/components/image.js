import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import useTFClassify from "../utils/hooks/useTFClassify";

function Image({ index, image, handleRemove, show }) {
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef();
  const { predict, predictions, setPredictions, isLoading } = useTFClassify();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {(predictions.length > 0 || isLoading) && (
        <span
          className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"
          onClick={() => setPredictions([])}
        >
          {isLoading && <p>Fetching results...</p>}
          {predictions.map((prediction) => (
            <div className="flex justify-between text-sm">
              <p>{prediction.className}</p>
              <p>{Math.floor(prediction.probability * 100)} %</p>
            </div>
          ))}
        </span>
      )}
      <i
        className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
          isHovering ? "" : "hidden"
        }`}
        onClick={() => handleRemove(index)}
      ></i>
      <i
        className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 ${
          isHovering ? "" : "hidden"
        }`}
        onClick={() => predict(imageRef.current)}
      ></i>
      <img
        ref={imageRef}
        onClick={show}
        src={image}
        width="100%"
        height="auto"
        crossOrigin="anonymous"
      />
    </div>
  );
}

Image.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  image: PropTypes.string,
  handleRemove: PropTypes.func,
};

export default Image;
