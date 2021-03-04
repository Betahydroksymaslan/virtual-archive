import styled from 'styled-components';

export const LoginBox = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${({ theme }) => theme.media.tablet} {
    width: 80%;
    height: 80%;
    border-radius: 10px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
  }
  ${({ theme }) => theme.media.desktop} {
    width: 800px;
    display: flex;
    overflow: hidden;
    height: auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;
`;

export const LoginImageWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
`;

export const StyledLoginWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.media.desktop} {
    width: 50%;
    height: 450px;
    background-color: #e5e5ff;
  }
`;

export const Header = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 40px;
`;

export const NavWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const NavItem = styled.span`
  padding-bottom: 5px;
  font-size: 18px;
  border-bottom: ${(props) => (props.active ? `2px solid #9475f4` : 'none')};
  ${({ theme }) => theme.media.desktop} {
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: border-bottom 0.3s ease;
  ${({ theme }) => theme.media.desktop} {
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`;
