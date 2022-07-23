import reset from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
${reset}
    body{ // 폰트 종류, 배경색
        background-color:${(props) =>
          props.color === true ? "white" : `rgb(243,250,242)`}
    }
    :root{ //색, 폰트 설정, radius 설정
        
    }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  /* height: calc(100vw / 9 * 16); */
`;
