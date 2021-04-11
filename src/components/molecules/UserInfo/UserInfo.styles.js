import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  grid-row: 3 / 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserInfoImage = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 0 35px 7px rgba(0, 0, 0, 0.1);
  svg {
    width: 100%;
  }
`;

export const UserInfoName = styled.span`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.mainDark};
`;

export const UserInfoEmail = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.grey};
`;
