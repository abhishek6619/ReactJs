/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai</h1>
      <h2>Abhishek Singh</h2>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//     children: "Click me to visit Google",
//   },
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const reactElement = React.createElement(
  
)

ReactDOM.createRoot(document.getElementById("root")).render(
  anotherElement()
);
