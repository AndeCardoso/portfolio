import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 100px 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #0f0f0f;
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 40px;
    margin-bottom: 40px;
`;

export const Projects = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
        width: 100%;
        display: flex;
    }
    
    .bottom {
        width: 100%;
        display: flex;        
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;

        .top {
            display: flex;
            flex-direction: column;
        }
        
        .bottom {
            display: flex;
            flex-direction: column;
        }
    }
`;

export const MoreRepos = styled.div`
    margin-top: 50px;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #C90467;
    }
`;