import React, { useRef, useEffect, useState } from 'react';
import reactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { StyledModal } from './Modal.styles';

const Modal = ({
  children,
  isOpen,
  shouldBeClosedOnOutsideClick,
  handleOnClose,
}) => {
  const [canBeAnimated, setCanBeAnimated] = useState(false);

  const modalRef = useRef(null);
  const previousAvtiveElement = useRef(null);

  const handleOutsideClick = ({ target }) => {
    const { current } = modalRef;

    if (shouldBeClosedOnOutsideClick && target === current) {
      handleOnClose();
    }
  };

  useEffect(() => {
    if (!modalRef.current) return;

    const { current: modal } = modalRef;
    if (isOpen) {
      previousAvtiveElement.current = document.activeElement;
      modal.showModal();
      setCanBeAnimated(!canBeAnimated);
    } else if (previousAvtiveElement.current) {
      setCanBeAnimated(!canBeAnimated);
      modal.close();
      previousAvtiveElement.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const { current: modal } = modalRef;
    const handleCancel = () => {
      handleOnClose();
    };
    modal.addEventListener('cancel', handleCancel);
    return () => modal.removeEventListener('cancel', handleCancel);
  }, [handleOnClose]);

  return reactDOM.createPortal(
    <StyledModal
      ref={modalRef}
      className={canBeAnimated ? 'animationOn' : null}
      onClick={handleOutsideClick}
    >
      {children}
    </StyledModal>,
    document.body
  );
};

Modal.propTypes = {
  shouldBeClosedOnOutsideClick: PropTypes.bool,
  handleOnClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Modal;
