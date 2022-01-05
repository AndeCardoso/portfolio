import * as S from './styled';
import { Image } from '../dumb/button'
import Logo from '../../img/logo-small.svg'
import { FaReact } from "react-icons/fa";

const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <S.CopyTexts>
                    <Image path={Logo} type="FooterLogo" to="#home" />
                    <S.Copyright>Copyright © 2021</S.Copyright>
                    <S.Rights>Todos os direitos reservados.</S.Rights>
                    <S.MadeBy>
                            <p>Desenvolvido por</p>
                            <a href="https://www.linkedin.com/in/andersoncardoso-dev/" target="_blank" rel="noreferrer" className='name'> Anderson Cardoso </a>
                            <p>utilizando <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React<FaReact size="15px" /> </a></p>
                    </S.MadeBy>
                </S.CopyTexts>
            </S.Container>
        </S.Footer>
    )
}

export default Footer;