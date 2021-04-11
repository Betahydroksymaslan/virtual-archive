import styled from 'styled-components';

export const UserSettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  ${({ theme }) => theme.media.desktop} {
    grid-column: 2/25;
    grid-row: 3/25;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 20px;
    box-shadow: 0 0 25px -5px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
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
    background: transparent;
    justify-content: flex-start;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const PageName = styled.div`
  display: none;
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    width: 160px;
    height: 160px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 100%;
    transform: translate(50%, -50%);
    svg {
      width: 20%;
      margin: 40% 40% 0 0;
      path {
        fill: ${({ theme }) => theme.colors.mainColor};
      }
    }
  }
`;

export const NoUserMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.grey};
`;
