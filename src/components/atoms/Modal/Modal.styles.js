import styled from 'styled-components';

export const StyledModal = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  border: none;
  z-index: 1000;
  transform: translate(-50%, -50%) scale(0.6);
  opacity: 0;
  padding: 0;
  margin: 0;
  max-width: 100%;
  max-height: 100%;
  background-color: transparent;
  overflow: visible;
  transition: all 0.3s ease;
  &.animationOn {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
