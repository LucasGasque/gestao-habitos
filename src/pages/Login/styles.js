import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    img{
        display: none;
    }

    h1{
        color:var(--purple);
        font-size: 22px;
        font-weight: bold;
    }

    form{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-around;
        width: 288px;
        height: 320px;
        border-radius:5px;
        box-shadow: 0px 0px 1px 1px var(--grey);
    }

    p{
        font-size: 12px;
        color: var(--grey);

        button{
            border: none;
            background-color: transparent;
            color:var(--purple);
            font-weight:bold;
            margin-left: 3px;
        }

        button:hover{
            color:var(--darkPurple);
        }

        button:active{
            transform: scale(97%);
        }
    } 

    @media (min-width: 768px){

        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;

        img{
            display: block;
            width: 498px;
            height: 358px;
            box-shadow: 0px 0px 1px 1px var(--grey);
        }
    }
`

