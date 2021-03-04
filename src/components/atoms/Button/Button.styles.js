import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 70%;
  height: 50px;
  background: ${({ theme }) => theme.colors.mainGradient};
  border: none;
  outline: none;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.5s ease;
  ${({ theme }) => theme.media.desktop} {
    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.mainGradientHover};
    }
  }
`;
