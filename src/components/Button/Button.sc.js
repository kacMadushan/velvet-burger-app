import styled, { css } from 'styled-components';

export const BtnOrder = styled.button`
    text-align: center;
    color: #966909;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    padding: 16px 38px;
    border: 1px solid #966909;
    background-color: #dad735;
    box-shadow: 2px 2px 2px #966909;

    ${props => props.disabled && css`
        color: #888888;
        cursor: not-allowed;
        border: 1px solid #cccccc;
        background-color: #c7c6c6;
    `}

    &:hover {
        color: #966909;
        background-color: #a0db41;

        ${props => props.disabled && css`
            color: #888888;
            cursor: not-allowed;
            border: 1px solid #cccccc;
            background-color: #c7c6c6;
        `}
    }
`;

export const BtnOption = styled.button`
    color: #ffffff;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    padding: 6px 16px;
    border: 1px solid #aa6817;
    background-color: ${props => props.less ? '#d39952' : '#8f5e1e'};

    ${props => props.disabled && css`
        border: 1px solid #7e7365;
        background-color: #ac9980;
        cursor: not-allowed;
    `}

    &:hover {
        background-color: ${props => props.less ? '#daa972' : '#99703f'}

        ${props => props.disabled && css`
            border: 1px solid #7e7365;
            background-color: #ac9980;
            cursor: not-allowed;
        `}
    }
`;

export const BtnDefault = styled.button`
    color: #5c9210;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    border: 0;
    background-color: #ffffff;
`;