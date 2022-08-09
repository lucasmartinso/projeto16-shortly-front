import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/reset.css";
import GlobalStyle from "./assets/styles/globalStyle";
import { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Ranking from "./components/Ranking";
import UserInfosContext from "./contexts/UserInfosContext";

export default function App() {
  const [token,setToken] = useState(localStorage.getItem("token"));

  return (
    <UserInfosContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Ranking />} /> 
          <Route path="/signin" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter> 
      </UserInfosContext.Provider>
  );
}
