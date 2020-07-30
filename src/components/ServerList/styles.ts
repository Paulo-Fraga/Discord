import styled from 'styled-components'

export const Conteiner = styled.div`
    display:flex;
    grid-area: CI;
    flex-direction:column;

    align-items: center;
    justify-content:center;

    background-color: 'var(--tertiary)';
    padding: 11px 0px;

    max-height:100vh;
    overflow-y: scroll;
    
    ::--webkit-scrollbar{
    display:none;
    }

`;
export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid 'var(--quarternary)';

    margin-bottom: 8px;

`;
