import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 100px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 1200px) {
        width: 100%;
        flex-direction: column;
    }
    
    @media screen and (max-width: 376px) {
        img {
            width: 100%;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
        align-items: center;
    }
`;

export const Greeter = styled.span`
    font-size: 50px;
    margin-bottom: 40px;
`;

export const MainWrote = styled.h2`
    font-size: 40px;
    margin-bottom: 40px;
    text-align: center;
    line-height: normal;
`;

export const Function = styled.p`
    font-size: 25px;
    text-align: left;
    line-height: normal;
    @media screen and (max-width: 1200px) {
        align-items: center;
        text-align: center;
    }
`;