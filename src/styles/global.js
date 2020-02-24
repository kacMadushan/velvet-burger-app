import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: #333333;
        font-weight: normal;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        background-color: #ffffff;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

export default Global;