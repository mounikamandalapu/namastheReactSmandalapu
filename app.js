import React from "react";
import ReactDOM from "react-dom/client";
//creating an element is core thing of React, so CreateELement API is part of React.
//createElement -> html tag, object that gives attributes, child
const h1 = React.createElement(
  "h1",
  { className: "helloWorld", id: "heading", style: { color: "red" } },
  "Hello World"
); // returns an object
console.log(h1);
//nested elements
const parent = React.createElement(
  "div",
  {},
  React.createElement("div", { className: "parent2" }, [
    React.createElement(
      "h1",
      { className: "header", key: "header1" },
      "I'm H1 tag"
    ),
    React.createElement(
      "h2",
      { className: "h2tagg", key: "header2" },
      "siblings: I'm h2 tag"
    ),
  ])
);
//We need to create a root
//Creating a root and rendering anything to Root is job of ReactDOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
//render will take the reactELement as object creates an HTML element and then places it to the DOM.
root.render(parent);
