import React from "react";

const AppContext = React.createContext({ loggedIn: false, user: {} });

export default AppContext;
