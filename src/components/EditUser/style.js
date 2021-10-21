import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--greyLessOpacity);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`

export const Modal = styled.form`
    width: 290px;
    min-height: 225px;
    background: var(--white);
    border-radius: 5px;
    border: 1px solid var(--grey);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    
    h2 {
        font-size: 1.5em;
        color: var(--black);
        margin: 15px 0;
    }

` 

export const DivButton = styled.div`
height: 70px;
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
width: 270px;
margin: 0 0 10px 0;

button {
    width: 100%;
}
`