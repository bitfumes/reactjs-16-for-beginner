import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import { Redirect, Route } from "react-router-dom";

export default function AuthRoute(props) {
  const [isLoggedIn] = useContext(AppContext);

  if (isLoggedIn) return <Route {...props} />;

  return <Redirect to="/login" />;
}
