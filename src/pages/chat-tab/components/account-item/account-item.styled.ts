import styled, { css } from 'styled-components';
import { cssRound } from 'styles/theme';
import { STATUS_COLOR } from 'utils/user';

interface LogoStyling {
  logo: string | null;
}

interface StatusStyling {
  status: UserStatus;
}

export const AccountItemStyled = {
  LogoWrapper: styled.div`
    position: relative;
  `,
  Logo: styled.div<LogoStyling>`
    ${cssRound('2rem')}
    background-color: black;
  `,
  Status: styled.div<StatusStyling>(
    ({ theme, status }) => css`
      position: absolute;
      border: 2px solid ${theme.background};
      background-color: ${STATUS_COLOR[status]};
      bottom: 0rem;
      right: 0rem;
      ${cssRound('10px')}
    `
  ),
};
