import styled from 'styled-components';

export const Container = styled.h2`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 3px;
    border-image: linear-gradient(45deg, #fd0066, #000069) 1;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
`;

export const Title = styled.h3`
    font-size: 32px;
`;

export const Description = styled.p`
    font-size: 15px;
`;

export const Tecnologies = styled.div`
    display: inline;
    align-items: center;
`;