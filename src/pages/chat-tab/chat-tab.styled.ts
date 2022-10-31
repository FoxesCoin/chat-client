import styled, { css } from 'styled-components';

import { COLORS } from 'styles/color';
import { FONT_SIZES, FONT_WEIGHT } from 'styles/font';

import { cssHideScrollbar, cssVerticalGap, Theme } from 'styles/theme';
import { addAlphaToHEX } from 'utils/color';

interface WrapperStyling {
  isActive: boolean;
}

export const UnreadMessage = styled.span(
  ({ theme }) => css`
    font-size: ${FONT_SIZES.tiny};
    font-weight: 500;
    padding: 0.25rem;
    border-radius: 0.25rem;
    color: ${theme.chat.unreadCounter};
    background-color: ${addAlphaToHEX(theme.chat.unreadCounter, 0.16)};
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
  Wrapper: styled.div`
    height: 100%;
    padding-bottom: 2rem;
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
  `,
  TopBar: styled.div`
    padding: 1rem 1.5rem 0;
    margin-bottom: 1rem;
    ${cssVerticalGap('1rem')}
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
  ChatList: styled.div`
    overflow-y: auto;
    ${cssHideScrollbar}
    ${cssVerticalGap('1rem')}
  `,
};
