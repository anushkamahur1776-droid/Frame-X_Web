import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter basename="/Frame-X_Web">

    <App />

  </BrowserRouter>

);