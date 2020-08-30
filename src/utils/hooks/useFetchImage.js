import React, { useState, useEffect } from "react";
import Axios from "axios";

const url = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Axios.get(`${url}?client_id=${secret}&page=${page}`).then((res) => {
      setImages([...images, ...res.data]);
    });
  }, [page]);

  return [images, setImages];
}
