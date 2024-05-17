import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App.tsx";
import { Auth } from "./components/Auth.tsx";
import { Games } from "./components/Games.tsx";
import { Bet } from "./components/Bet.tsx";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />{" "}
        <Route path="/games" element={<Games />} />
        <Route path="/bet" element={<Bet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
