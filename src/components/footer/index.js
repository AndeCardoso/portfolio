import * as S from './styled';
import { Image } from '../dumb/button'
import Logo from '../../img/logo-big.svg'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const Footer = () => {
    return (
        <S.Footer>
            <Image path={Logo} type="FooterLogo" to="#home" />
            <S.CopyTexts>
                <S.Copyright>Copyright <AiOutlineCopyrightCircle sixe="5px"/> 2021</S.Copyright>
                <S.Rights>All rights reserved.</S.Rights>
                <S.MadeBy>Made by
                    <a href="https://www.linkedin.com/in/anderson-cardoso-781b56102/" target="_blank" rel="noreferrer"> Anderson Cardoso </a>
                    with <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <FaReact size="20px" /> </a>
                </S.MadeBy>
            </S.CopyTexts>
        </S.Footer>
    )
}

export default Footer;