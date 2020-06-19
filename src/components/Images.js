import React, { Component } from "react";

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = { interval: null };
  }
  componentDidMount() {
    console.log("Images Comp Mounted");
    this.setState({
      interval: setInterval(() => {
        console.log("Hello");
      }, 1000),
    });
  }

  componentWillUnmount() {
    console.log("Images Comp Unmounted");
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80" />
    );
  }
}
