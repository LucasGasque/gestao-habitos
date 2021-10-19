import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 768px){
        padding-left: 268px ;
        flex-wrap: wrap;
        min-height: calc(100vh - 95px);
    }

`

export const Box = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 100px 0 150px;

    @media (min-width: 768px){
        padding: 20px 10px 0px;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        max-width: 1170px;
        min-height: calc(100vh - 95px);
    }
    
`

export const Head = styled.header`
    display: none;

    @media (min-width: 768px){
        display: block;
        height: 75px;
        width: 100%;
        border-bottom: 1px solid var(--black);


        h1{
            text-align: center;
            line-height: 75px;
        }
    }

`
