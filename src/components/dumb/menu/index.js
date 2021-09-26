import React from 'react';
import * as S from './styled';

const Menu = ({ open }) => {
  return (
    <S.Menu open={open}>
      <a href="#home">
        <span role="img" aria-label="about us"></span>
        HOME
      </a>
      <a href="#about">
        <span role="img" aria-label="price"></span>
        SOBRE
      </a>
      <a href="#hardskills">
        <span role="img" aria-label="contact"></span>
        SKILLS
      </a>
      <a href="#projects">
        <span role="img" aria-label="contact"></span>
        PROJETOS
      </a>
      <a href="#contact">
        <span role="img" aria-label="contact"></span>
        CONTATOS
      </a>
    </S.Menu>
  )
}
export default Menu;