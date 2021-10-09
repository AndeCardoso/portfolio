import styled from 'styled-components';

export const Container = styled.div`

`;

export const StyledBurger = styled.button`
  position: relative;
  top: 3%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all ease-in-out 0.6s;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: #fd0066;
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    transition: all ease-in-out 0.6s;
  }

  div:nth-child(1){
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
  }

  div:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;