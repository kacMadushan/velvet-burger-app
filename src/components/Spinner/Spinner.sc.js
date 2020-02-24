import styled from 'styled-components';

export const SpinnerBorder = styled.div.attrs({
    className: 'spinner-grow'
})`
    text-align: center;
    width: 48px;
    height: 48px;
    margin: 30px auto;
    background-color: #521751;   
`;

export const SpinnerSpan = styled.span.attrs({
    className: 'sr-only'
})`
    color: #000;
    text-align: center;
`;