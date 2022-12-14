import { createPortal } from 'react-dom';

import { ModalPageStyled as Styled } from './modal-page.styled';

import { RWrapper } from 'typings/react';

import { ReactComponent as Close } from 'assets/icons/close.svg';
import { Button } from 'components/button';
import {
  ModalPageState,
  MODAL_ANIMATION_DURATION,
  useModalPageState,
} from './modal-page.state';

interface Props extends ModalPageState {
  title: string;
  isDisabledConfirm: boolean;
}

const modalRoot = document.getElementById('modal') as HTMLElement;

export const ModalPage: RWrapper<Props> = (props) => {
  const {
    className,
    children,
    title,
    isOpen,
    isDisabledConfirm,
    onClose,
    onConfirm,
  } = props;

  const { handleClose, handleConfirm, isHide } = useModalPageState({
    isOpen,
    onClose,
    onConfirm,
  });

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Styled.Modal className={isHide ? 'hide' : ''}>
      <Styled.Wrapper animationDuration={MODAL_ANIMATION_DURATION}>
        <Styled.TopBar>
          <span>{title}</span>
          <Styled.CloseButton onClick={handleClose}>
            <Close />
          </Styled.CloseButton>
        </Styled.TopBar>
        <div className={className}>{children}</div>
        <Styled.Footer>
          <Button isDisabled={isDisabledConfirm} onClick={handleConfirm}>
            Confirm
          </Button>
        </Styled.Footer>
      </Styled.Wrapper>
    </Styled.Modal>,
    modalRoot
  );
};
