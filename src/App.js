import React from "react";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
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
