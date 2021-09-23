import styled from 'styled-components';

export const Footer = styled.footer`
    height: 100%;
    width: 100%;
    display: flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    padding: 25px;
    background-color: #0b0b0b;
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
`;

export const MadeBy = styled.p`
    display: flex;
    align-items: center;

    svg {
        margin-left: 5px;
    }
`;