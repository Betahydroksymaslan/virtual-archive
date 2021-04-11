import styled from 'styled-components';

export const AppLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 0;
  user-select: none;
  ${({ theme }) => theme.media.desktop} {
    padding: 0;
    grid-row: 1 / 3;
    justify-content: flex-start;
    margin-left: 35px;
  }
`;

export const LogoImageWrapper = styled.div`
  width: 45px;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    width: 28px;
  }
`;

export const AppLogoName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.mainDark};
  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-left: 10px;
  }
`;
