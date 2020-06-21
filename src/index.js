import React from "react";
/* --> previously we had to use require and browserify to make an import work, react has webpack undearneath the hood that does the bundling for us */
import ReactDOM from "react-dom";
/* reactDOM is like the glue (??), reactNative would render to mobile phones */
import "./index.css"; /* --> react allows you to add css files to each different component */
import App from "./App";
/* import { Hello } from "./Hello.js"; */
import Hello from "./Hello.js";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

/* with react you can have your own tags */
ReactDOM.render(
  <React.StrictMode>
    <Hello greeting={`Hello React Ninja`} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); /* for now u have no idea what this is, just keep it there */
