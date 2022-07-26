import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { GlobalStyle, MainDiv } from "./styles";
function App() {
  const [color, setColor] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setColor(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <GlobalStyle color={color} />

      <MainDiv>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </MainDiv>
    </>
  );
}
export default App;
