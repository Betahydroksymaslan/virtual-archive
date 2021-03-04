import styled from 'styled-components';

export const Exit = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
  svg {
    width: 25px;
    line {
      stroke-width: 5px;
      stroke: black;
    }
  }
  ${({ theme }) => theme.media.desktop} {
    transition: transform 0.3s ease;
    &:hover {
      cursor: pointer;
    }
  }
`;
