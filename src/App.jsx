import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Reset } from "styled-reset";
function App() {
  return (
    <>
      <Reset />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
