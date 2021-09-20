import styled from 'styled-components';
import BgProfile from '../../../img/bg-perfil.png';

export const Perfil = styled.img`
    width: 450px;
    height: 450px;
    filter: grayscale(10%);
    border-radius: 50%;
    background-image: url('${BgProfile}');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 90%;
`;

export const Logo = styled.img`
    width: 350px;
`;