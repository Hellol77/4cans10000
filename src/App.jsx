import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
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
      </MainDiv>
    </>
  );
}
export default App;
