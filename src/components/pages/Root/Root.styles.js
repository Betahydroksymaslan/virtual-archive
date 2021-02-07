import styled from 'styled-components';

export const StyledRoot = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
