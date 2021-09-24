import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 100px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 40px;
    margin-bottom: 40px;
`;

export const ContactForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    select {
        margin-bottom: 30px;
    }
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
`;

export const Option = styled.option`
    border-radius: 9px;
`;

export const TextArea = styled.textarea`
    max-width: 100%;
    min-height: 150px;
    margin: 0 15px;
    border-radius: 9px;
    padding: 10px;
    font-size: 24px;
    resize: vertical;
`;