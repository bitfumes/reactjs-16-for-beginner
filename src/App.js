import React from "react";

function App({ title }) {
  return (
    <div>
      <div
        style={{
          padding: "2rem",
          border: "1px solid green",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        {title}
      </div>
    </div>
  );
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
