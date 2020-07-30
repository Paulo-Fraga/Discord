import styled from 'styled-components';
import { Props } from './index';


export const Button = styled.button<Props>`
    display: flex;
    align-content: center;
    justify-items: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;
    
    margin-bottom: 8px;

    background-color: ${(props) => 
        props.isHome ? 'var(--rocketseat)'  : 'var(--primary'};
        position:relative;
        cursor:pointer;
`;