import styled from 'styled-components';

export const Button = styled.button`
    display: flex;    
    align-items: center;
    padding-top : 8px;
    & svg {
        margin-right: 4px;
    }
    &:hover {
        cursor: pointer;  
    }
`;

export const Span = styled.span`
    font-weight: bold;
`;