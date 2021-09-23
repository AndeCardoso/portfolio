import * as S from './styled';
import { Image, Link } from '../dumb/button'
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
                <S.MadeBy>Made by <Link to="https://www.linkedin.com/in/anderson-cardoso-781b56102/">Anderson Cardoso</Link> with <FaReact size="20px" /></S.MadeBy>
            </S.CopyTexts>
        </S.Footer>
    )
}

export default Footer;