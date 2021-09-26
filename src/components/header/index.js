import * as S from './styled';
import Logo from '../../img/logo-small.svg';
import { Image, Link } from '../dumb/button';
import Menu from '../dumb/menu';
import Burger from '../dumb/burger';
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState();

    return (
        <S.Header>
            <S.Container>
                <Image type="Logo" path={Logo} to='#' />
                {/* <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} /> */}
                <S.Menu>
                    <Link to='#home'>HOME</Link>
                    <Link to='#about'>SOBRE</Link>
                    <Link to='#hardskills'>SKILLS</Link>
                    <Link to='#projects'>PROJETOS</Link>
                    <Link to='#contact'>CONTATO</Link>
                </S.Menu>
            </S.Container>
        </S.Header>
    )
}

export default Header;