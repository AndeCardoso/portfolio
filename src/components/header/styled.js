import styled from 'styled-components';
import { Image } from '../dumb/button/styled';

export const Header = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0b0b0b;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    color: #ffffff;
`;

export const LogoButton = styled(Image)`
    margin-left: 15px;
`;