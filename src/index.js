import React from "react";
/* --> previously we had to use require and browserify to make an import work, react has webpack undearneath the hood that does the bundling for us */
import ReactDOM from "react-dom";
/* reactDOM is like the glue (??), reactNative would render to mobile phones */
import "./index.css"; /* --> react allows you to add css files to each different component */
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import App from "./containers/App";

/* with react you can have your own tags, like the <Card/> tag
TODO Don't forget that you can only render 1 element, so wrap things up if u have multiple*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); /* for now u have no idea what this is, just keep it there */
