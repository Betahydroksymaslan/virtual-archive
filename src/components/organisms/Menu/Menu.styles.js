import styled from 'styled-components';

export const MenuWrapperBack = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 1001;
  position: fixed;
  top: 0;
  backdrop-filter: blur(7px);
  visibility: hidden;
  ${({ theme }) => theme.media.desktop} {
    position: static;
    background-color: transparent;
    grid-row: 1 /-1;
  }
`;

export const MenuWrapper = styled.div`
  width: 77%;
  margin-left: 15px;
  height: 95%;
  border-radius: 35px;
  visibility: hidden;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 2px 0 8px 3px rgba(0, 0, 0, 0.12);
  ${({ theme }) => theme.media.desktop} {
    visibility: visible;
    margin: 0;
    border-radius: 0;
    background-color: transparent;
    width: 100%;
    height: 100%;
    box-shadow: none;
    display: grid;
    grid-template: repeat(20, 1fr) / 1fr;
  }
`;

export const CloseMenuButton = styled.button`
  width: 55px;
  height: 55px;
  align-self: flex-end;
  margin: 30px auto;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.mainGradient};
  outline: none;
  border: none;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
  svg {
    width: 50%;
    line {
      stroke-width: 7px;
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const LoginLink = styled.div`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  color: ${({ theme }) => theme.colors.mainDark};
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 0;
    transition: opacity 0.3s ease;
    grid-row: 19 / -1;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
  svg {
    width: 40px;
    margin-right: 15px;
    ${({ theme }) => theme.media.desktop} {
      width: 20px;
      margin-right: 20px;
    }
  }
`;

export const LoginLinkArrow = styled.div`
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  margin-left: 30px;
  border-top: 2px solid rgba(0, 0, 0, 0.4);
  border-right: 2px solid rgba(0, 0, 0, 0.4);
  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const Avatar = styled.div`
  ${({ theme }) => theme.media.desktop} {
    svg {
      width: 35px;
      path.bdeb749e-438d-4bd1-b678-b7b793f837b0 {
        fill: #748191;
      }
      path.b3f58656-b4a1-4225-9071-da1cbe893fff {
        fill: #24405b;
      }
    }
  }
`;
