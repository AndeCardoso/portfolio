import styled from "styled-components";

export const Select = styled.select`
    font-size: 25px;
    padding: 10px;
    border: none;
    border-radius: 9px;
    transition: all ease-in-out 0.3s;

    :hover {
        filter: drop-shadow(3px 3px 10px #fd0066);
    }

    :focus {
        background-color: #0a0a0a;
        border: solid 3px #fd0066;
        padding: 8px;
        color: #ffffff;
    }
`;