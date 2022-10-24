import styled from 'styled-components';

import { COLORS } from 'styles/color';
import { MOBILE_MEDIA, PC_MEDIA } from 'styles/media';

import { cssSquare, Theme } from 'styles/theme';

export const SideBarIcon = styled(Theme.FlexCenter)`
  cursor: pointer;

  ${cssSquare('3.5rem')}

  svg {
    ${cssSquare('2rem')}
  }

  path {
    fill: ${COLORS.silver};
  }
`;

export const SideBarStyled = {
  Wrapper: styled.aside`
    background-color: ${COLORS.jet};

    display: flex;

    ${MOBILE_MEDIA} {
      bottom: 0;
      width: 100%;
      position: fixed;
      justify-content: space-around;
    }

    ${PC_MEDIA} {
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
    }
  `,
  Navigation: styled.nav`
    display: flex;
    gap: 1rem;

    justify-content: space-around;

    ${MOBILE_MEDIA} {
      flex-grow: 5;
    }

    ${PC_MEDIA} {
      flex-direction: column;
    }
  `,

  Setting: styled(Theme.FlexCenter)`
    ${MOBILE_MEDIA} {
      flex-grow: 1;
    }

    ${PC_MEDIA} {
      flex-grow: unset;
    }
  `,
};
