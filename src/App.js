import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/reset.css";
import GlobalStyle from "./assets/styles/globalStyle";
import { useState } from "react";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}
