import styled, { css } from 'styled-components';

import { COLORS } from 'styles/color';
import { FONT_SIZES } from 'styles/font';

import { RWrapper } from 'typings/react';
import { addAlphaToHEX } from 'utils/color';

interface Props {
  onClick: () => void;

  isDisabled?: boolean;
}

const ButtonStyled = styled.button(
  ({ theme }) => css`
    padding: 0.5rem 1rem;
    color: ${COLORS.white};
    background-color: ${theme.primaryColor};
    font-size: ${FONT_SIZES.small};
    border-radius: 0.25rem;

    &:disabled {
      background-color: ${addAlphaToHEX(theme.primaryColor, 0.6)};
    }
  `
);

export const Button: RWrapper<Props> = (props) => {
  const { className, onClick, children, isDisabled } = props;

  return (
    <ButtonStyled className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </ButtonStyled>
  );
};
