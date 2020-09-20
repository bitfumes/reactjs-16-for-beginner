import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import { Redirect } from "react-router-dom";
import AnimatedRoute from "./AnimatedRoute";

export default function GuestRoute({ children, ...rest }) {
  const [isLoggedIn] = useContext(AppContext);

  if (!isLoggedIn) return <AnimatedRoute {...rest}>{children}</AnimatedRoute>;

  return <Redirect to="/" />;
}
