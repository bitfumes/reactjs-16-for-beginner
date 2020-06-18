import React from "react";

function App({ title }) {
  return <div>{title}</div>;
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "Hello React 2" };
//   }

//   render() {
//     return <div>{this.state.title}</div>;
//   }
// }

export default App;
