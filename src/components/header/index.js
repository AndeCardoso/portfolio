import React, { useState, useRef } from 'react';

import { Image, Link } from '../dumb/button';
import Menu from '../dumb/menu';
import Burger from '../dumb/burger';

import Logo from '../../img/logo-small.svg';
import { useOnClickOutside } from './hook';
import * as S from './styled';

const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return (
        <S.Header>
            <S.Container>
                <Image type="Logo" path={Logo} to='#' />
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
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