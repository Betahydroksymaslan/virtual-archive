import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ValidationMessage = styled.p`
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.error};
`;
