import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative;
  ${({ theme }) => theme.media.desktop} {
    grid-column: 2;
    grid-row: 1;
  }
`;
