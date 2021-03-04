import styled from 'styled-components';

export const AppLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 0;
  user-select: none;
`;

export const LogoImageWrapper = styled.div`
  width: 45px;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    width: 32px;
  }
`;

export const AppLogoName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  ${({ theme }) => theme.media.desktop} {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
