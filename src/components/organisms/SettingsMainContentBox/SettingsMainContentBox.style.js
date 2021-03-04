import styled from 'styled-components';

export const ContentBox = styled.div`
  width: 100%;
  transform: translateY(-30px);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    transform: translateY(0);
    margin-top: 20px;
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
  ${({ theme }) => theme.media.desktop} {
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 5%;
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: relative;
    box-shadow: none;
    background-color: transparent;
    &::before {
      content: '';
      display: block;
      height: 15px;
      width: 5px;
      position: absolute;
      border-radius: 5px;
      left: 0;
      background: ${({ theme }) => theme.colors.mainGradientToTop};
      transition: height 0.2s ease;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.inputBorderLight};
    }
    &:hover::before {
      height: 100%;
    }
  }
`;

export const ContentBoxName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 10px 15px;
  user-select: none;
  ${({ theme }) => theme.media.desktop} {
    margin: 0;
    width: 100%;
    font-weight: 400;
  }
`;

export const ContentBoxProperty = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainDarkFont};
  margin-bottom: 20px;
  user-select: none;
  ${({ theme }) => theme.media.desktop} {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    font-weight: 400;
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
    margin: 0;
    padding: 0;
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.s};
    right: 10%;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.2s ease;
    &:hover {
      cursor: pointer;
      border-bottom-color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
