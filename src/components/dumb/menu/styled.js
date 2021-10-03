import styled from 'styled-components';

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000069;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: all ease-in-out 0.6s;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(+100%)'};
  z-index: 9;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: all ease-in-out 0.3s;

    &:hover {
      text-shadow: 1px 1px 15px #fd0066;
    }
  }
`;