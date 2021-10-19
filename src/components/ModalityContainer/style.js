import styled from 'styled-components';
import {Button} from '@material-ui/core';


export const Container = styled.div`
    width: 254px;
    border-radius: 5px;
    border: 1px solid var(--black);

    div:first-child{
        background-color: var(--yellow);
        height: 27px;
        border-bottom: 1px solid var(--black);
        border-radius: 5px 5px 0 0;
    }

    p{
        font-weight: bold;
        font-size: 14px;
        text-align: center;
        line-height: 27px;
    }

    div:last-child{
        height: 21px;
        background-color: var(--white);
        border-top: 1px solid var(--black);
        border-radius: 0 0 5px 5px;
    }
`

export const ArrowButton = styled(Button)`
    width: 100%;
    height: 100%;
`

export const Box = styled.section`
    height: ${props => props.show ? '242px' : '0'};
    transition: 0.5s;
`