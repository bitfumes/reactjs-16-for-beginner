import React, { useEffect, useRef, useState } from "react";
import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { math } from "@tensorflow/tfjs";

export default function Tensorflow() {
  const imageRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);

  function predict() {
    const img = imageRef.current;

    setIsLoading(true);
    mobilenet.load().then((model) => {
      // Classify the image.
      model.classify(img).then((predictions) => {
        setPredictions(predictions);
        setIsLoading(false);
      });
    });
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <h1 className="text-center">TensorFlow Example</h1>
        <img
          src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MjI1Nn0"
          width="400"
          crossOrigin="anonymous"
          ref={imageRef}
        />
        <div className="text-center my-5">
          {predictions.length > 0 &&
            predictions.map((prediction) => (
              <div className="flex justify-between">
                <p>{prediction.className}</p>
                <p>{Math.floor(prediction.probability * 100)} %</p>
              </div>
            ))}

          <button
            className="p-2 rounded bg-gray-900 text-white w-64"
            onClick={predict}
          >
            {isLoading && "⏳"}
            {!isLoading && "Predict Result"}
          </button>
        </div>
      </div>
    </div>
  );
}
