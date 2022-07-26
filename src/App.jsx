import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import { GlobalStyle } from "./styles";
import Like from "./pages/Like";
import Random from "./pages/Random";
import Search from "./pages/Search";
import Rate from "./pages/Rate";
import Detail from "./pages/Detail";

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
        <Route path="/search" element={<Search />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}
export default App;
