import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    padding: 10px 0;
    font-size: 24px;
    color: #ffffff;
    margin: 15px;
    background-image: linear-gradient(45deg, rgba(255,0,66,1), rgba(0,0,69,1));
    cursor: pointer;
    transition: ease-in-out all 0.5s;

    :hover {
        filter: brightness(150%);
    }
    
    a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    svg {
        fill: #ffffff;
        filter: blur(110%);
    }
`;

export const Link = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 24px;
    margin-right: 15px;
    background-color: unset;
    color: #ffffff;
    word-break: keep-all;
    cursor: pointer;
    transition: ease-in-out all 0.2s;
    
    :hover {
        filter: drop-shadow(1px 1px 5px #ff0066);
    }

    a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            fill: #ffffff;
            margin-left: 5px;
        }
    }
`;

export const Image = styled.img`
    height: 35px;
    cursor: pointer;
`;

export const Logo = styled.img`
    height: 35px;
    margin: 15px;
    cursor: pointer;
    filter: brightness(180%);
    transition: ease-in-out all 1s;

    :hover {
        filter: brightness(180%) saturate(180%);
    }
`;

export const FooterLogo = styled.img`
    height: 50px;
    margin: 15px;
    cursor: pointer;
    transition: ease-in-out all 0.8s;

    :hover {
        filter: drop-shadow(8px 8px 10px #000000) saturate(150%);
    }
`;