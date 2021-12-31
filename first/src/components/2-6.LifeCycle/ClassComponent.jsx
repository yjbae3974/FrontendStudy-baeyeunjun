import React, { Component } from "react";

export default class ClassComponent2 extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      date: new Date(),
    };
    this.handleClick = this.handleClick.bind(this); //여기서 바인드는 앞에 this를 주는 것.
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWIllUnmount");
    clearInterval(this.timerID);
  }
  tick() {
    console.log("tick");
    this.setState({ date: new Date() });
  }
  handleClick = () => {
    alert(this.state.date.toLocaleTimeString());
  };
  render() {
    console.log("render");
    return (
      <div>
        <div onClick={this.handleClick}>Hello world!</div>
        <h1>It is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
