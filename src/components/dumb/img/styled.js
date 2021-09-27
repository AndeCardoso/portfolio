import styled from 'styled-components';
import BgProfile from '../../../img/bg-perfil.png';

export const Perfil = styled.img`
    width: 40%;
    height: 40%;
    border-radius: 50%;
    background-image: url('${BgProfile}');
    background-repeat: no-repeat;
    background-size: cover;
    transition: ease-in-out all 0.8s;

    :hover {
        filter: drop-shadow(8px 8px 10px #000000) sepia(50%);
        width: 42%;
    }

    @media screen and (max-width: 1200px) {
        width: 50%;
    }
    
    @media screen and (max-width: 426px) {
        width: 100%;
    }
`;

export const Logo = styled.img`
    width: 350px;
    filter: drop-shadow(3px 3px 10px #000000) brightness(100%);
    transition: ease-in-out all 1s;

    :hover {
        filter: drop-shadow(8px 8px 10px #000000) brightness(180%);
        width: 370px;
    }
`;

export const FooterLogo = styled.img`
    width: 100px;
    
`;