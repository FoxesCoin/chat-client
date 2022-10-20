import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from 'styles/color';
import { PC_MEDIA } from 'styles/media';

import { SideBarIcon } from '../side-bar.styled';

interface Styled {
  isActive: boolean;
}

export interface SideBarTemplate extends Styled {
  onClick: () => void;
}

interface Props extends SideBarTemplate {
  children: ReactNode;
}

const Wrapper = styled(SideBarIcon)<Styled>(
  ({ theme, isActive }) => css`
    position: relative;

    &::after {
      position: absolute;
      width: 3px;
      height: 1.5rem;
      background-color: ${isActive ? theme.primaryColor : COLORS.transparent};

      right: 0;
      top: 50%;
      transform: translateY(-50%);

      content: none;
      ${PC_MEDIA} {
        content: '';
      }
    }

    path {
      fill: ${isActive ? theme.primaryColor : COLORS.spanishGray};
    }
  `
);

export const SideBarItem = (props: Props) => {
  const { isActive, onClick, children } = props;

  return (
    <Wrapper isActive={isActive} onClick={onClick}>
      {children}
    </Wrapper>
  );
};
