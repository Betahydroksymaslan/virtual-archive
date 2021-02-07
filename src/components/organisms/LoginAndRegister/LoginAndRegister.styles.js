import styled from 'styled-components';

export const LoginBox = styled.div`
  width: 100%;
  @media (min-width: 500px) {
    width: 800px;
    display: flex;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;
`;

export const LoginImageWrapper = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
`;

export const StyledLoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.black};
  @media (min-width: 500px) {
    width: 80%;
    height: 60vh;
    background-color: #e5e5ff;
  }
  @media (min-width: 700px) {
    width: 50%;
    height: 75vh;
  }
`;

export const Header = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 40px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  @media (min-width: 500px) {
    display: none;
  }
`;

export const NavItem = styled.span`
  padding-bottom: 5px;
  font-size: 18px;
  border-bottom: ${(props) => (props.active ? `2px solid #2ebd59` : 'none')};
  @media (min-width: 500px) {
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const UsernameInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 70%;
  border: none;
  border-radius: 30px;
  height: 50px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.inputBorderLight};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding-left: 15px;
  outline: none;
  margin-bottom: 25px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mainDarkFontColor};
  @media (min-width: 500px) {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const PasswordInput = styled(UsernameInput).attrs({
  type: 'password',
})``;

export const EmailInput = styled(UsernameInput).attrs({
  type: 'email',
})``;

export const StyledButton = styled.button`
  width: 70%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  border: none;
  outline: none;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;
  @media (min-width: 500px) {
    &:hover {
      cursor: pointer;
      background-color: #2ad15c;
    }
  }
`;

export const ActionButton = styled(StyledButton)`
  background-color: transparent;
  border: 1px solid black;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  margin: 50px 0;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    &:hover {
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
  border-top: 1px solid black;
  border-right: 1px solid black;
  transform: rotate(45deg);
  transition: transform 0.2s ease;
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: border-bottom 0.3s ease;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export const Exit = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  transition: transform 0.3s ease;
  color: #404040;
  @media (min-width: 500px) {
    &:hover {
      cursor: pointer;
      transform: rotate(45deg);
    }
  }
`;
