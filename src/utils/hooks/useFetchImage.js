import React, { useState, useEffect } from "react";
import Axios from "axios";

const url = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page) {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Axios.get(`${url}?client_id=${secret}&page=${page}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(["Unable to fetch images"]);
        setIsLoading(false);
      });
  }, [page]);

  return [images, setImages, errors, isLoading];
}
