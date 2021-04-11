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
    display: grid;
    grid-template-columns: 220px repeat(25, 1fr);
    grid-template-rows: repeat(25, 1fr);
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
