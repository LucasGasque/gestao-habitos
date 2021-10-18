import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 68px;
    background-color: var(--purple);
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img{
        width: 90px;
        height: 90px;
        position: absolute;
        top: 24px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        display: block;
        margin: 0;
        padding: 0;
    }

    button{
        background-color: transparent;
        border: none;
        color: white;
        width: 20px;
        margin-right: 20px;
    }

    button:hover{
        color: var(--black);
    }

    button:active{
        transform: rotate(20deg);
    }

    @media (min-width: 768px){
        display: none;
    }

`