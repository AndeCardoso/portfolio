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
        background-color: #050505;
        font: 100%/1.5rem 'Work Sans';
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`