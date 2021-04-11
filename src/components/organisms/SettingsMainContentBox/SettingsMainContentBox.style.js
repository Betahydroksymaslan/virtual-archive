import styled from 'styled-components';

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  transform: translateY(-30px);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.media.desktop} {
    transform: translateY(0);
    margin-bottom: 0;
    padding: 5% 5%;
  }
`;

export const CategoryBox = styled.div`
  width: 90%;
  border-radius: 15px;
  box-shadow: 0 0 25px -5px rgb(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    display: none;
  }
  ${({ theme }) => theme.media.desktop} {
    width: 90%;
    position: relative;
    box-shadow: none;
    align-items: flex-start;
    background-color: transparent;
    svg {
      margin-right: 10px;
      display: block;
      width: 30px;
      height: 30px;
      path {
        fill: ${({ theme }) => theme.colors.grey};
      }
    }
  }
`;

export const ProprtyIconNameBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const ContentBoxName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 10px 15px;
  user-select: none;
  ${({ theme }) => theme.media.desktop} {
    margin: 0;
    font-weight: 400;
    text-align: center;
    align-self: center;
  }
`;

export const ContentBoxProperty = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainDarkFont};
  margin-bottom: 20px;
  user-select: none;
  ${({ theme }) => theme.media.desktop} {
    margin: 0 0 0 15px;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 400;
    text-align: center;
  }
`;

export const ChangePasswordEmailButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.mainColor};
  margin-bottom: 15px;
  border: none;
  background-color: transparent;
  outline: none;
  ${({ theme }) => theme.media.desktop} {
    margin: 15px 0 0 15px;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.s};
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.2s ease;
    &:hover {
      cursor: pointer;
      border-bottom-color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
