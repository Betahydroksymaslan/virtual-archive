import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.l};
  align-items: center;
  width: 100%;
`;
