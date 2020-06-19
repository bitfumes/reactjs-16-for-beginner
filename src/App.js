import React from "react";
import "./assets/css/style.css";

// function App({ title }) {
//   return (
//     <div>
//       <div className="bg-gray-600 text-white p-5 border">{title}</div>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    console.log("App Contructor");

    super(props);
    this.state = { title: "Hello React 2", isShowing: false };
  }
  // states are Immutable
  componentDidMount() {
    console.log("App Mounted");
    this.setState({ title: "Hello LifeCycle" });
  }

  handleClick = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };

  render() {
    console.log("App Render");
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
            <div className="my-4">{this.state.title}</div>
            <button
              className="p-1 bg-blue-700 text-white my-2"
              onClick={this.handleClick}
            >
              Toggle Image
            </button>
          </div>
          {this.state.isShowing ? (
            <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80" />
          ) : null}
        </div>
      </section>
    );
  }
}

export default App;
