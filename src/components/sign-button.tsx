import { ReactComponent as Add } from 'assets/icons/add.svg';
import styled from 'styled-components';
import { COLORS } from 'styles/color';
import { cssSquare } from 'styles/theme';
import { RElement } from 'typings/react';
import { addAlphaToHEX } from 'utils/color';

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

export const SignButton = ({ className, onClick }: RElement<Props>) => (
  <Button className={className} onClick={onClick}>
    <Add />
  </Button>
);
