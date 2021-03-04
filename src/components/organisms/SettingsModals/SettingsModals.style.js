import styled from 'styled-components';
import { ValidationMessage } from 'components/molecules/LoginForm/LoginForm.styles';

export const ModalWrapper = styled.div`
  width: 90vw;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 0 10px 5px rgb(0, 0, 0, 0.1);
  padding: 50px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    width: 35vw;
  }
`;

export const ValidationWarningMessage = styled(ValidationMessage)`
  height: 1em;
  padding: 0 2%;
`;
