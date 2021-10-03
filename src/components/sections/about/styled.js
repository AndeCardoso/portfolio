import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 100px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0f0f0f;
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 1200px) {
        width: 100%;
        flex-direction: column;

        img {
            margin-bottom: 30px;
        }
    }
`;

export const Content = styled.div`
    flex-direction: column;
    justify-content: center;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
        width: 100%;
        flex-direction: column;

        button {
            width: auto;
        }
    }
`;

export const Paragraph = styled.p`
    width: 100%;
    padding: 15px;
    text-align: justify;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 40px;
`;