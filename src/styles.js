import reset from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
${reset}

    body{ // 폰트 종류, 배경색
    
        background-color:${(props) =>
          props.color === true ? "rgb(255,255,255)" : `rgb(243,250,242)`};
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: 500;
    }
    nav{
      background-color:${(props) =>
        props.color === true ? "rgb(255,255,255)" : `rgb(243,250,242)`};
    
    }
    :root{ //색, 폰트 설정, radius 설정
        --button-color:rgb(111 232 151);
        --button-non-color:rgb(113 112 112);
        --input-color:#ddd;
        --background-color:rgb(255 255 255);
    }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  /* height: calc(100vw / 9 * 16); */
`;
