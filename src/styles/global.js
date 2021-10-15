import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --grey: #505C6E;
        --black: #212121;
        --green: #CAFFA1;
        --purple:#6C63FF;
        --blue: #AFFAF4;
        --yellow: #EBE3A2;
        --white: #FCFCFC;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{}

`