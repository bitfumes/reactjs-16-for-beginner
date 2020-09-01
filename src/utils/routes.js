import React from "react";
import Home from "../page/Home";
import Gallery from "../page/Gallery";
import Login from "../page/Login";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/gallery",
    component: () => <Gallery />,
  },
  {
    path: "/login",
    component: () => <Login />,
  },
];
