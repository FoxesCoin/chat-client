import styled, { css } from 'styled-components';

import { COLORS } from 'styles/color';
import { FONT_SIZES, FONT_WEIGHT } from 'styles/font';

import { cssVerticalGap, Theme } from 'styles/theme';

interface WrapperStyling {
  isActive: boolean;
}

export const UnreadMessage = styled.span(
  ({ theme }) => css`
    font-size: ${FONT_SIZES.tiny};
    font-weight: 500;
    padding: 0.25rem;
    border-radius: 0.25rem;
    background-color: red;
    color: ${theme.chat.unreadCounter};
    background-color: ${theme.chat.unreadCounter}22;
  `
);

export const ChatItemWrapper = styled(Theme.FlexLine)<WrapperStyling>(
  ({ theme, isActive }) => css`
    height: 2.5rem;
    background-color: ${isActive ? theme.primaryColor : COLORS.transparent};
    color: ${isActive ? COLORS.white : theme.text};
    padding: 0.25rem 1.5rem;
  `
);

export const ChatTabStyled = {
  TopBar: styled.div`
    padding: 1rem 1.5rem 0;
    ${cssVerticalGap('1rem')}
  `,
  Wrapper: styled.div`
    height: 100%;
    ${cssVerticalGap('1rem')}
    padding-bottom: 2rem;
    position: relative;
  `,
  Archived: styled.button`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: ${COLORS.transparent};
    color: ${COLORS.green};
    font-size: ${FONT_SIZES.x_small};
    font-weight: ${FONT_WEIGHT.medium};
    width: max-content;
    padding: 0.25rem 0.5rem;
  `,
};
