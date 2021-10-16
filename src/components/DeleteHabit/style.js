import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--white);
    border-radius: 5px;
    width: 190px;
    height: 150px;
    border: 1px solid var(--grey);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top :50%;
    left: 50%;
    margin-top: -75px;
    margin-left: -85px;

    h2{
        font-size: 22px;
    }

    div{
        display: flex;
        flex-direction: column;
    }

    button{
        height: 25px;
        border-radius: 5px;
        width: 140px;
    }

`

export const DeleteButton = styled.button`
    background-color: var(--purple);
    border: 2px solid var(--purple);
    margin-bottom: 5px;
    color:var(--white) ;

    :hover{
        box-shadow: 2px 2px 2px 2px;
    }
`

export const CancelButton = styled.button`
    background-color: var(--white);
    border: 2px solid var(--purple);
    color: var(--purple);

    :hover{
        box-shadow: 2px 2px 2px 2px;
    }
`
