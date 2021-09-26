import * as S from './styled'

const Burger = ({ open, setOpen }) => {
    return (
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
    )
  }
  
  export default Burger;