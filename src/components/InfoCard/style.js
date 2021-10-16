import styled from 'styled-components';

export const Container = styled.div`
    background-color:${props => props.color};
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color:var(--black);
    width: 100%;
    height: 511px;

    h2{
        font-size: 24px;
    }

    p{
        font-size: 14px;
    }

    img{
        width: 198px;
        height: 159px;
    }

    @media (min-width: 768px){
        
    }
`