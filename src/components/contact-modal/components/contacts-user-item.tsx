import styled, { css } from 'styled-components';
import { COLORS } from 'styles/color';
import { RElement } from 'typings/react';
import { addAlphaToHEX } from 'utils/color';

interface Styled {
  isActive: boolean;
}

interface Props extends Styled {
  name: string;

  onClick?: () => void;
}

const Wrapper = styled.li<Styled>(
  ({ theme, isActive }) => css`
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    background-color: ${isActive
      ? addAlphaToHEX(theme.primaryColor, 0.16)
      : COLORS.transparent};
    transition: 0.1s color ease-in-out;

    &:hover {
      color: ${isActive ? '' : theme.opacityPrimaryColor};
    }
  `
);

export const ContactsUserItem = ({
  className,
  name,
  isActive,
  onClick,
}: RElement<Props>) => (
  <Wrapper isActive={isActive} className={className} onClick={onClick}>
    {name}
  </Wrapper>
);
