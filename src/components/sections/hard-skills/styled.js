import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 100px 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #050505;

`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    flex-direction: column;
    justify-content: center;
`;

export const Buttons = styled.div`
    text-align: center;
`;

export const Paragraph = styled.p`
    width: 100%;
    padding: 30px;
    text-align: justify;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 40px;
`;

export const Tecnologies = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 560px) {
        width: 100%;
    }
`;

export const TecnologiesGroup = styled.div`
    display: flex;

`;