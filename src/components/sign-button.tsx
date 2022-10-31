import styled from 'styled-components';

import { COLORS } from 'styles/color';

import { cssSquare } from 'styles/theme';
import { addAlphaToHEX } from 'utils/color';

import { RElement } from 'typings/react';

import { ReactComponent as Add } from 'assets/icons/add.svg';

interface Props {
  onClick: () => void;
}

const Button = styled.button`
  background-color: ${addAlphaToHEX(COLORS.green, 0.16)};
  ${cssSquare('2rem')}
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;

  svg {
    ${cssSquare('0.75rem')}
  }

  path {
    fill: ${COLORS.green};
  }

  &:hover {
    background-color: ${COLORS.green};

    path {
      fill: ${COLORS.white};
    }
  }
`;

export const SignButton: RElement<Props> = (props) => {
  const { className, onClick } = props;

  return (
    <Button className={className} onClick={onClick}>
      <Add />
    </Button>
  );
};
