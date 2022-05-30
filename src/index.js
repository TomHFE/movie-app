// import React from "react";
// import { StrictMode } from "react";
// import { render } from "react-dom";
// import App from "./App";

// render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

// import * as ReactDOM from "react-dom";
// import App from "./App";

// const container = document.getElementById("root");

// // Initial render.
// ReactDOM.render(<App tab="home" />, container);

// // // During an update, React would access
// // // the root of the DOM element.
// ReactDOM.render(<App tab="profile" />, container);

import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import React from "react";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);

// // During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);
