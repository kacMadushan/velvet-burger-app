import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
    text-align: center;
    margin: 30px auto;
    width: 100%;
    height: auto;
`;

export const Title = styled.h1`
    color: #703b09;
    font-weight: 700;
    font-size: 42px;
    margin-top: 30px;
    text-transform: uppercase;
`;

export const HomeLink = styled(Link)`
    color: #5c9210;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
`;
