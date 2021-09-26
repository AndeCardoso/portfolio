import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 9px;
    padding: 10px 30px;
    font-size: 24px;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
    margin: 15px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Link = styled.button`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 24px;
    margin-right: 15px;
    background-color: unset;
    color: #ffffff;
    word-break: keep-all;
    cursor: pointer;
`;

export const Image = styled.img`
    height: 35px;
    cursor: pointer;
`;

export const Logo = styled.img`
    height: 35px;
    margin: 15px;
    cursor: pointer;
`;

export const FooterLogo = styled.img`
    height: 90px;
    margin: 15px;
    cursor: pointer;
`;