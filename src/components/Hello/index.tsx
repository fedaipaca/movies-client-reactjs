import React from "react";
import Greeting from "./Greeting";

interface HelloMessage {
  title: string;
}

class Hello extends React.PureComponent<HelloMessage> {
  render() {
    return (
      <h1>
        <Greeting /> {this.props.title}
      </h1>
    );
  }
}

export default Hello;
