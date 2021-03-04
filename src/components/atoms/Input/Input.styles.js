import styled from 'styled-components';

export const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 70%;
  border: none;
  border-radius: 30px;
  height: 50px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.inputBorderLight};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding-left: 15px;
  outline: none;
  margin-bottom: 25px;
  margin-top: ${({ marginTop }) => marginTop || 0};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mainDarkFontColor};
  ${({ theme }) => theme.media.desktop} {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
