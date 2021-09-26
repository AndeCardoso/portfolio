import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background-color: #0b0b0b;
    
    a {
        width: auto;
    }
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1640px){
        width: 100%;
    }
    
    @media screen and (max-width: 426px){
        flex-direction: column;
    }
`;

export const Copyright = styled.span`
    display: flex;
    align-items: center;
    font-size: 15px;
`;

export const Rights = styled.p`
    display: flex;
    align-items: center;
    font-size: 15px;
    font-style: italic;
`;

export const CopyTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        text-decoration: none;
        color: inherit;
        margin: 0 5px;
    }
`;

export const MadeBy = styled.span`
    display: flex;
    align-items: center;

    svg {
        margin-left: 5px;
    }

    @media screen and (max-width: 321px) {
        flex-direction: column;
    }
`;