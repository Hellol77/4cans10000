import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { GlobalStyle, MainDiv } from "./styles";
function App() {
  const [color, setColor] = useState(false);
  const changeBackGroundColor = () => {
    setColor(true);
  };
  return (
    <>
      <GlobalStyle color={color} />
      <MainDiv>
        <Routes>
          <Route path="/" element={<Main changeBackGroundColor={changeBackGroundColor}/>} />
        </Routes>
      </MainDiv>
    </>
  );
}
export default App;
