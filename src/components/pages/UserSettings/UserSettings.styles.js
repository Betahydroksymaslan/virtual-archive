import styled from 'styled-components';

export const UserSettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  ${({ theme }) => theme.media.desktop} {
    padding: 30px 100px;
  }
`;

export const SettingsHeader = styled.header`
  color: ${({ theme }) => theme.colors.lightGrey};
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(to top left, #6f66ed, #ac7df7);
  clip-path: circle(900px at 50% -700px);
  ${({ theme }) => theme.media.desktop} {
    clip-path: none;
    height: 60px;
    margin: 10px 30px 60px;
    position: relative;
    background: transparent;
    justify-content: flex-start;
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(247, 248, 250, 1) 0%,
        rgba(210, 196, 255, 1) 50%,
        rgba(247, 248, 250, 1) 100%
      );
      position: absolute;
      bottom: -40px;
    }
  }
`;

export const PageName = styled.h1`
  display: none;
  ${({ theme }) => theme.media.desktop} {
    display: block;
    color: ${({ theme }) => theme.colors.mainDark};
    margin-left: 30px;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 100%;
      background: ${({ theme }) => theme.colors.mainGradientToTop};
    }
  }
`;

export const HeaderUserWrapper = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    right: 5%;
  }
`;

export const HeaderUsername = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.mainDark};
  }
`;

export const HeaderUserImage = styled.div`
  width: 65px;
  margin-right: 30px;
  svg {
    path.bdeb749e-438d-4bd1-b678-b7b793f837b0 {
      fill: ${({ theme }) => theme.colors.lightGrey};
    }
  }
  ${({ theme }) => theme.media.desktop} {
    width: 35px;
    margin-right: 15px;
  }
`;

export const NoUserMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.grey};
`;
