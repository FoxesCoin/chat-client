import styled, { css, keyframes } from 'styled-components';

import { cssFlexCenter, cssSquare, Theme } from 'styles/theme';
import { addAlphaToHEX } from 'utils/color';

import { COLORS } from 'styles/color';
import { MOBILE_MEDIA, PC_MEDIA } from 'styles/media';

interface ModalStyled {
  animationDuration: number;
}

const pcFaitIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pcFaitOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  
  100% {
    opacity: 0;
    transform: translateY(200px);
  }
`;

const mobileFaitIn = keyframes`
  0% {
    opacity: 0.8;
    transform: translateX(100%);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const mobileFaitOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  
  100% {
    opacity: 0.8;
    transform: translateX(100%);
  }
`;

export const ModalPageStyled = {
  Modal: styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    ${PC_MEDIA} {
      background-color: ${addAlphaToHEX(COLORS.onyx, 0.4)};
      ${cssFlexCenter}
    }
  `,
  Wrapper: styled.div<ModalStyled>(
    ({ animationDuration, theme }) => css`
      background-color: ${theme.background};
      animation-duration: ${animationDuration}ms;
      display: grid;
      grid-template-rows: min-content 1fr min-content;

      ${MOBILE_MEDIA} {
        width: 100%;
        height: 100%;

        animation-name: ${mobileFaitIn};

        .hide & {
          animation-name: ${mobileFaitOut};
        }
      }

      ${PC_MEDIA} {
        width: 500px;
        border: 1px solid ${theme.text};
        border-radius: 0.4rem;

        animation-name: ${pcFaitIn};

        .hide & {
          animation-name: ${pcFaitOut};
        }
      }
    `
  ),
  TopBar: styled(Theme.FlexLine)`
    border-bottom: 1px solid ${({ theme }) => theme.text};
    padding: 1rem;
  `,
  Footer: styled(Theme.FlexCenter)`
    border-top: 1px solid ${({ theme }) => theme.text};
    padding: 1rem;
  `,
  Content: styled.div`
    padding: 1rem;
  `,
  CloseButton: styled.button(
    ({ theme }) => css`
      ${cssSquare('1.5rem')}
      ${cssFlexCenter}
      
      background-color: ${addAlphaToHEX(theme.text, 0.16)};
      border-radius: 0.25rem;

      &,
      path {
        transition: all 0.2s ease-in-out;
      }

      svg {
        ${cssSquare('0.75rem')}
      }

      path {
        fill: ${theme.text};
      }

      &:hover {
        background-color: ${theme.text};

        path {
          fill: ${theme.background};
        }
      }
    `
  ),
};
