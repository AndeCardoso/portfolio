import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 100px 30px;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 40px;
    margin-bottom: 40px;
`;

export const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    select {
        margin-bottom: 30px;
    }

    button {
        margin-left: auto;
    }
`;

export const Inputs = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        input {
            width: 100%;
            margin-top: 30px;
        }
    }
`;

export const TextArea = styled.textarea`
    max-width: 100%;
    min-height: 160px;
    margin-bottom: 30px;
    border-radius: 9px;
    padding: 10px;
    font-size: 24px;
    resize: vertical;
    transition: all ease-in-out 0.3s;

    :hover{
        filter: drop-shadow(3px 3px 10px #fd0066);
    }

    :focus{
        background-color: #0a0a0a;
        border: solid 3px #fd0066;
        padding: 3px 7px;
        color: #ffffff;
    }
`;