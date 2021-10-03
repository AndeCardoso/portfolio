import * as S from './styled';

const Menu = ({ open }) => {

  const close = () => {
    <S.Menu open={false}></S.Menu>
  }

  return (
    <S.Menu open={open}>
      <a href="#home">
        <span role="img" aria-label="about us" onClick={close}></span>
        HOME
      </a>
      <a href="#about">
        <span role="img" aria-label="price" onClick={close}></span>
        SOBRE
      </a>
      <a href="#hardskills">
        <span role="img" aria-label="contact" onClick={close}></span>
        SKILLS
      </a>
      <a href="#projects">
        <span role="img" aria-label="contact" onClick={close}></span>
        PROJETOS
      </a>
      <a href="#contact">
        <span role="img" aria-label="contact" onClick={close}></span>
        CONTATOS
      </a>
    </S.Menu>
  )
}
export default Menu;