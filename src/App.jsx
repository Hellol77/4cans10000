import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import { GlobalStyle } from "./styles";
import Like from "./pages/Like";
import Random from "./pages/Random";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/like" element={<Like />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </>
  );
}
export default App;
