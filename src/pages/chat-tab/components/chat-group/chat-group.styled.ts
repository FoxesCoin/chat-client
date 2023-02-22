import styled, { css } from 'styled-components';
import { FONT_SIZES, FONT_WEIGHT } from 'styles/font';
import { Theme } from 'styles/theme';

export const ChatGroupStyled = {
  TitleWrapper: styled(Theme.FlexLine)`
    padding: 0 1.5rem;
    align-items: center;
  `,

  Title: styled(Theme.Text)(
    ({ theme }) => css`
      font-size: ${FONT_SIZES.x_small};
      color: ${theme.chat.unreadCounter};
      text-transform: uppercase;
      font-weight: ${FONT_WEIGHT.medium};
    `
  ),
};
