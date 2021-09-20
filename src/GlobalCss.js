import { createGlobalStyle } from 'styled-components';

export const GlobalCss = createGlobalStyle`
    *,
    ::before,
    ::after {
        outline: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100%;
        background-color: #2c2c2c;
        font: 100%/1.5rem 'Work Sans';
    }

    a {
        text-decoration: none;
    }
`