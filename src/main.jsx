import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar.jsx";
import { Abaout, Tecnologias } from "./Index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NavBar />
    <Abaout />
    <Tecnologias />
  </React.StrictMode>
);
