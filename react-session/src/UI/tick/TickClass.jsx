import React, { Component } from "react";

export class TickClass extends Component {
  render() {
    console.log("render");
    return <div>TickClass</div>;
  }
  showTime() {
    console.log(new Date());
  }
  componentDidMount() {
    this.showTime();
    console.log("componentDidMount()");
  }
}

export default TickClass;
