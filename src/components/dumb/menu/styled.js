import styled from 'styled-components';

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //background-color: #fd0066;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9999;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;