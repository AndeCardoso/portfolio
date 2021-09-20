import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #050505;
    color: #ffffff;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;