import styled, { css } from 'styled-components';

import { useClickEvent } from 'hooks/event';
import { useAccordionApi, useAccordionState } from '../accordion.context';

import { COLORS } from 'styles/color';
import { FONT_WEIGHT } from 'styles/font';

import { cssSquare, cssVerticalCentralize } from 'styles/theme';

import { RWrapper } from 'typings/react';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';

const Wrapper = styled.div<{ isOpen: boolean }>(
  ({ theme, isOpen }) => css`
    padding: 1.25rem;
    padding-right: 2rem;
    position: relative;

    font-weight: ${FONT_WEIGHT.medium};
    transition: background-color 0.2s ease-in-out;
    border-bottom: 1px solid
      ${isOpen ? theme.accordion.border : COLORS.transparent};
    background-color: ${isOpen ? theme.accordion.active : COLORS.transparent};
  `
);

const Icon = styled.div<{ isOpen: boolean }>(
  ({ isOpen, theme }) => css`
    position: absolute;
    right: 0.75rem;
    ${cssVerticalCentralize}

    svg {
      ${cssSquare('12px')}
      transition: 0.2s transform ease-in-out;
      transform: rotate(${isOpen ? 180 : 0}deg);
    }

    path {
      fill: ${theme.text};
    }
  `
);

export const AccordionHeader: RWrapper = (props) => {
  const { className, children } = props;

  const isOpen = useAccordionState();
  const setIsOpen = useAccordionApi();

  const handleClick = useClickEvent(() => {
    setIsOpen((current) => !current);
  });

  return (
    <Wrapper isOpen={isOpen} className={className} onClick={handleClick}>
      <div>{children}</div>
      <Icon isOpen={isOpen}>
        <ArrowDown />
      </Icon>
    </Wrapper>
  );
};
