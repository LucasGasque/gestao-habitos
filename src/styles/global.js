import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --grey: #505C6E;
        --greyLessOpacity: rgba(80,92,110,.5);
        --black: #212121;
        --green: #CAFFA1;
        --purple:#6C63FF;
        --darkPurple: #4B45B2;
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

    body{
        font-family: 'Roboto', sans-serif;

    }

`