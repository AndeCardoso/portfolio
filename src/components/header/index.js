import * as S from './styled';
import Logo from '../../img/logo-small.svg';
import { Image, Link } from '../dumb/button';

const Header = () => {
    return (
        <S.Header>
            <Image type="Logo" path={Logo} to='#' />
            <S.Menu>
                <Link to='#about'>SOBRE</Link>
                <Link to='#home'>HOME</Link>
                <Link to='#projects'>PROJETOS</Link>
                <Link to='#hardskills'>SKILLS</Link>
                <Link to='#contact'>CONTATO</Link>
            </S.Menu>
        </S.Header>
    )
}

export default Header;