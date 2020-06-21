import React, { Component } from "react";
import "./Hello.css";

class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello World</h1>
        {/* having added the "greetings" prop in index.js we can use it here too */}
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

/* using default means this file only exports what's after the keyword default */
/* export default Hello; */
export default Hello;
