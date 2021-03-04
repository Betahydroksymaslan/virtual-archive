import styled from 'styled-components';

export const Button = styled.button`
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 30px;
  border-radius: 100%;
  left: 15px;
  background: ${({ theme }) => theme.colors.mainGradient};
  outline: none;
  border: none;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 8px 3px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'translateX(-100px)' : 'translateX(0)'};
  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const Span = styled.span`
  width: 75%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-radius: 5px;
  &::before,
  &::after {
    content: '';
    height: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 0;
  }
  &::before {
    top: -10px;
    width: 70%;
  }
  &::after {
    top: 10px;
    width: 50%;
  }
`;
