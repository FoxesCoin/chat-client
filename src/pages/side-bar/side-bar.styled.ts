import styled from 'styled-components';

import { COLORS } from 'styles/color';
import { PC_MEDIA } from 'styles/media';

import { cssSquare, Theme } from 'styles/theme';

export const SideBarIcon = styled(Theme.FlexCenter)`
  cursor: pointer;

  ${cssSquare('3.5rem')}

  svg {
    ${cssSquare('2rem')}
  }

  path {
    fill: ${COLORS.spanishGray};
  }
`;

export const SideBarStyled = {
  Wrapper: styled.aside`
    background-color: ${COLORS.black};

    position: fixed;
    bottom: 0;
    width: 100%;

    display: flex;
    justify-content: space-around;

    ${PC_MEDIA} {
      height: 100%;
      width: unset;
      flex-direction: column;
      justify-content: space-between;
    }
  `,
  Navigation: styled.nav`
    display: flex;
    gap: 1rem;

    flex-grow: 5;
    justify-content: space-around;

    ${PC_MEDIA} {
      flex-grow: unset;
      flex-direction: column;
    }
  `,

  Setting: styled(SideBarIcon)`
    flex-grow: 1;

    ${PC_MEDIA} {
      flex-grow: unset;
    }
  `,
};
