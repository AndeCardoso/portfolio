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
    padding: 0 15px;
`;

export const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 15px;
`;

export const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
`;

export const Tecnologies = styled.div`
    align-items: center;
`;