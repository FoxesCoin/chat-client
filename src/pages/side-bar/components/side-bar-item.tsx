import styled, { css } from 'styled-components';
import { COLORS } from 'styles/color';
import { PC_MEDIA } from 'styles/media';
import { cssVerticalCentralize } from 'styles/theme';
import { RWrapper } from 'typings/react';
import { SideBarIcon } from '../side-bar.styled';

interface Styled {
  isActive: boolean;
}

export interface SideBarTemplate extends Styled {
  onClick: () => void;
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
      ${cssVerticalCentralize}

      content: none;
      ${PC_MEDIA} {
        content: '';
      }
    }

    path {
      fill: ${isActive ? theme.primaryColor : COLORS.silver};
    }
  `
);

export const SideBarItem = ({
  isActive,
  children,
  className,
  onClick,
}: RWrapper<SideBarTemplate>) => (
  <Wrapper isActive={isActive} className={className} onClick={onClick}>
    {children}
  </Wrapper>
);
