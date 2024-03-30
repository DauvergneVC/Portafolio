import React from 'react'
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar.jsx";

const contactRoot = ReactDOM.createRoot(document.getElementById("root"));
contactRoot.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
)