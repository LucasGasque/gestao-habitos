import styled from "styled-components";

export const Container = styled.div`

    div{
        
    }

    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-size: 30px;
        font-weight: bold;
    }

    h2{
        font-size: 24px;
        font-weight: bold;
    }

    p{
       font-size: 18px;
       padding: 0 10px;
    }


`;

export const Box = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 424px;
    width: 100%;
    text-align: center;

    :nth-child(2){
        background-color: var(--green);
    }

    :nth-child(4){
        background-color: var(--purple);
        color: var(--white);
    }

    :nth-child(6){
        background-color: var(--blue);
    }

    :nth-child(8){
        background-color: var(--yellow);
    }

`

export const Ondas = styled.div`
    width: 100%;
    height: 66px;

    :nth-child(3){
        background-color: var(--green);
    }

    :nth-child(5){
        background-color: var(--purple);
    }

    :nth-child(7){
        background-color: var(--blue);
    }

`