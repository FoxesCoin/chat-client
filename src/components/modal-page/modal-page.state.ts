import { useEffect, useState } from 'react';

export interface ModalPageState {
  isOpen: boolean;

  onConfirm: () => void;
  onClose: () => void;
}

export const MODAL_ANIMATION_DURATION = 500;

export const useModalPageState = (state: ModalPageState) => {
  const { isOpen, onConfirm, onClose } = state;
  const [isHide, setIsHide] = useState(!isOpen);

  useEffect(() => {
    setIsHide(!isOpen);
  }, [isOpen]);

  const addHideAnimation = (callback: () => void) => () => {
    setIsHide(true);
    setTimeout(() => {
      callback();
    }, MODAL_ANIMATION_DURATION - 20);
  };

  const handleClose = addHideAnimation(onClose);
  const handleConfirm = addHideAnimation(onConfirm);

  return {
    isHide,
    handleClose,
    handleConfirm,
  };
};
