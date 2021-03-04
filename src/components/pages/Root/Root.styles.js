import styled from 'styled-components';

export const StyledRoot = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }
`;
