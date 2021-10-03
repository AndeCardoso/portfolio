import * as S from './styled'

const Burger = ({ open, setOpen }) => {

  const isExpanded = open ? true : false;

  return (
    <S.Container>
      <S.StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
    </S.Container>
  )
}
  
  export default Burger;