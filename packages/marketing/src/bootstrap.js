import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Create Mount function to start the application
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    mount(el);
  }
}

// If we are running through container, just export the mount function
export { mount };
