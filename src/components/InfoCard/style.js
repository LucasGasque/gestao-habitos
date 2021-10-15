import styled from 'styled-components';

export const Container = styled.div`
    background-color:${props => props.color};
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color:var(--black);
    width: 100%;
    height: 300px;

    @media (min-width: 475px){
        width: 300px;
    }
`