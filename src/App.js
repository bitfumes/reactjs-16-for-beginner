import React from "react";
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className="text-center">
          <Images />
        </div>
      </div>
    </section>
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
