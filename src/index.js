import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

// Don't forget to replace BrowserRouter to HashRouter before deploying
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
