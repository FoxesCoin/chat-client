import { useClickEvent } from 'hooks/event';
import styled, { css } from 'styled-components';
import { COLORS } from 'styles/color';
import { cssRound, cssVerticalCentralize } from 'styles/theme';
import { RElement } from 'typings/react';

interface Props {
  isActive: boolean;

  onClick: () => void;
}

const Wrapper = styled.div<{ isActive: boolean }>(
  ({ isActive, theme }) => css`
    position: relative;

    &::before {
      content: '';
      display: block;
      height: 20px;
      width: 40px;
      border-radius: 10px;
      transition: all 0.2s ease-in-out;
      border: 2px solid ${theme.switch.border};
      background-color: ${isActive ? COLORS.green : theme.switch.background};
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      ${cssVerticalCentralize}
      transition: all 0.2s ease-in-out;
      background-color: ${isActive ? COLORS.white : theme.switch.dot};
      left: ${isActive ? 24 : 4}px;
      ${cssRound('12px')}
    }
  `
);

export const Switch = ({ className, isActive, onClick }: RElement<Props>) => {
  const handleClick = useClickEvent(onClick);

  return (
    <Wrapper onClick={handleClick} className={className} isActive={isActive} />
  );
};
