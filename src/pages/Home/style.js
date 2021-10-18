import styled from "styled-components";

export const Container = styled.div`

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

export const Img = styled.img`
    width: 198px;
    height: 159px;
    background-color: white;

    :first-child{
        width: 277px;
        height:208px;
    }

    @media (min-width: 768px){
        width: 370px;
        height: 296px;

        :first-child{
            width: 450px;
            height: 377px;
        }        
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

    span{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 424px;
        width: 100%;
        text-align: center;
    }

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

    @media (min-width:768px){

        span{
            max-width: 1170px;
            height: 456px;
            flex-direction: row;
        }

        :nth-child(2) span:nth-child(1){
                flex-direction: row-reverse;
        }

        :nth-child(6) span:nth-child(1){
                flex-direction: row-reverse;
        }

        h2{
            display: none;
        }

        h1{
            max-width: 400px;
        }

        p{
            max-width: 350px;
        }

        
    }
`;

export const Article = styled.article`
    h2{
        display: none;
    }

    @media (min-width:768px){
        h2{
            display: block;
            margin: 20px;
        }
    }
`;

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
`;