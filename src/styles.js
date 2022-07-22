import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
${reset}
    body{
        background-color: rgb(243,250,242);
    }
    :root{
        --main-color: hotpink;
    }
`;
