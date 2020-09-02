import React, { useEffect, useState } from "react";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes";
import Header from "./components/Header";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        console.log(user);
      } else {
        setUser({});
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

// class App extends React.Component {
//   // constructor(props) {
//   //   console.log("App Contructor");

//   //   super(props);
//   //   this.state = { title: "Hello React 2", isShowing: false };
//   // }
//   // states are Immutable
//   componentDidMount() {
//     console.log("App Mounted");
//     // this.setState({ title: "Hello LifeCycle" });
//   }

//   componentDidUpdate() {
//     console.log("App Updated");
//   }

//   handleClick = () => {
//     this.setState({ isShowing: !this.state.isShowing });
//   };

//   render() {
//     console.log("App Render");
//     return (
//       <section className="flex justify-center">
//         <div className="w-1/2">
//           <div className="text-center">
//             <div className="my-4">{this.state.title}</div>
//             <button
//               className="p-1 bg-blue-700 text-white my-2"
//               onClick={this.handleClick}
//             >
//               Toggle Image
//             </button>
//           </div>
//           {this.state.isShowing ? <Images /> : null}
//         </div>
//       </section>
//     );
//   }
// }

export default App;
