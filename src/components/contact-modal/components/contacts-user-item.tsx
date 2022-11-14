import styled, { css } from 'styled-components';

import { addAlphaToHEX } from 'utils/color';

import { COLORS } from 'styles/color';

import { RElement } from 'typings/react';

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

export const ContactsUserItem: RElement<Props> = (props) => {
  const { className, name, isActive, onClick } = props;

  return (
    <Wrapper isActive={isActive} className={className} onClick={onClick}>
      {name}
    </Wrapper>
  );
};
