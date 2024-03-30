import React from 'react'
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar.jsx";
const projectsRoot = ReactDOM.createRoot(document.getElementById("root"));

projectsRoot.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
)