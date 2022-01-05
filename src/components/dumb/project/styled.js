import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 3px;
    border-image: linear-gradient(45deg, #fd0066, #000069) 1;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
    transition: ease-in-out all 1s;

    :hover {
        width: 103%;
        height: 320px;
    }

    @media (max-width: 1000px) {
        margin: 10px 0;
    }

    @media (max-width: 425px) {
        height: 400px;
    }
`;

export const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 15px;

    @media screen and (max-width: 360px) {
        text-align: center;
        line-height: 1.2em;
    }
`;

export const Description = styled.p`
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
`;

export const Technologies = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 321px) {
        
    }
`;