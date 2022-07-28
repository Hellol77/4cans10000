import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/main";
import Profile from "./pages/Profile";
import { GlobalStyle, MainDiv } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainDiv>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Main />
      </MainDiv>
    </>
  );
}
export default App;
