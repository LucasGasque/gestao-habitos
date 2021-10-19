import styled from 'styled-components'

export const Container = styled.aside`
    width: 100%;
    height: 65px;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p{
        display: none;
    }
    
    @media (min-width: 768px){
        left: 0;
        height: 100%;
        width:268px;

        p{
            display: block;
            margin-left: 5px;
            font-size: 18px;
            font-weight: bold;
        }
    }
`

export const User = styled.header`
    display: none;
    position: relative;

    img{
        width: 82px;
        height: 82px;
        margin: 10px 20px;
    }

    h1{
        font-size: 24px;
        font-weight: bold;
        color: var(--white);
        margin: 0 20px;
    }

    @media (min-width: 768px){
        display: block;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 190px;
        background-color: var(--black);
    }
`

export const Box = styled.section`
    width: 100%;
    height: 45px;
    background-color: var(--white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--black);
    padding: 0 10%;
     
    button:active{
        transform: scale(95%);
    }

    @media (min-width: 768px){
        height: 100%;
        background-color: var(--purple);
        border: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 25px;

        button{
            color: #FCFCFC80;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 10px 0;
        }

        button:hover{
            color: var(--white)
        }
        
    }     
`    

export const GearButton = styled.button`
    display: none;
    
    @media (min-width: 768px){
        background-color: transparent;
        border: none;
        color: var(--white);
        width: 20px;
        margin-right: 20px;
        display: block;
        position: absolute;
        top:10px;
        right: 10px;

        :hover{
            color: var(--darkPurple);
        }

        :active{
            transform: rotate(20deg);
        }
    }
`

export const GraphButton = styled.button`
    position: absolute;
    background-color: var(--grey);
    color:var(--white);
    border-radius: 50%;
    border: none;
    width: 42px;
    height: 42px;
    bottom: 23px;
    left: 50%;
    margin-left: -21px;
    padding: 2px 0 0 2px;

    :hover{
        background-color: var(--darkPurple);
    }

    :active{
        transform: scale(95%);
    }

    @media (min-width: 768px){
        position: static;
        background-color: transparent;
        display: block;
        margin: 0;
        padding: 0;
        width: auto;

        p{
            margin-left: 5px;
        }

        :hover{
            color: var(--white);
            background-color: transparent;
        }
    }   
`

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: var(--grey);

    :hover{
        color: var(--darkPurple);
    }
`
