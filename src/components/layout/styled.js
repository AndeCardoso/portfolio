import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #050505;
    color: #ffffff;

    @media (max-width: 1200px) {
        width: 100%;
    }
    
    @media (max-width: 425px) {
        width: 100%;
    }
    `;