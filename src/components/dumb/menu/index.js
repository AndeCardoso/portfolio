import * as S from './styled';

const Menu = ({ open }) => {

  const close = () => {
    <S.Menu open={false}></S.Menu>
  }

  return (
    <S.Menu open={open}>
      <a href='https://drive.google.com/file/d/1oF-QhQtnXw1BMp50gil5QJEJeYIq8AM6/view?usp=sharing' target='_blank' rel='noreferrer'>
        CURRICULO
      </a>
      <a href="#home">
        <span aria-label="home" onClick={close}>
          HOME
        </span>
      </a>
      <a href="#about">
        <span aria-label="about" onClick={close}>
          SOBRE
        </span>
      </a>
      <a href="#hardskills">
        <span aria-label="skills" onClick={close}>
          SKILLS
        </span>
      </a>
      <a href="#projects">
        <span aria-label="projects" onClick={close}>
          PROJETOS
        </span>
      </a>
      <a href="#contact">
        <span aria-label="contact" onClick={close}>
          CONTATO
        </span>
      </a>
    </S.Menu>
  )
}
export default Menu;