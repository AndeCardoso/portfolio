import styled from "styled-components";
import bg from '../../../img/bg-home.png'

export const Section = styled.section`
    width: 100%;
    height: 100%;
    min-height: 90vh;
    padding: 100px 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;

    @media screen and (max-width: 425px) {
        padding: 140px 0 30px;
        height: 100%;
    }
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 100%;
        flex-direction: column;
        img {
            margin-top: 30px;
        }
    }
    
    @media screen and (max-width: 426px) {
        img {
            width: 80%;
            margin-top: 50px;
        }

        img:hover {
            filter: drop-shadow(8px 8px 10px #000000) brightness(180%);
            width: 85%;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
        margin-top: 30px;
        align-items: center;
    }
`;

export const Greeter = styled.span`
    font-size: 60px;
    margin-bottom: 40px;
    text-shadow:3px 3px 10px #000000, 3px 3px 10px #000000;
`;

export const MainWrote = styled.h2`
    font-size: 40px;
    margin-bottom: 40px;
    text-align: center;
    line-height: normal;
    text-shadow:3px 3px 10px #000000, 3px 3px 10px #000000;
`;

export const Function = styled.p`
    font-size: 25px;
    text-align: left;
    line-height: normal;
    text-shadow:3px 3px 10px #000000, 3px 3px 10px #000000;

    @media screen and (max-width: 1200px) {
        align-items: center;
        text-align: center;
    }
`;