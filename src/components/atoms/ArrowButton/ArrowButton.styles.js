import styled from 'styled-components';

export const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.mainGradient};
  width: 70%;
  height: 50px;
  border-radius: 30px;
  font-size: 20px;
  border: none;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  margin: 50px 0;
  outline: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      background-color: transparent;
    }
    &:hover > div {
      transform: translateX(20px) rotate(45deg);
    }
  }
`;

export const ActionButtonArrow = styled.div`
  width: 15px;
  height: 15px;
  margin-left: 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  transform: rotate(45deg);
  transition: transform 0.2s ease;
`;
