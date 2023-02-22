import styled, { css } from 'styled-components';
import { RWrapper } from 'typings/react';
import { AccordionContext } from './accordion.context';
import { AccordionContent, AccordionHeader } from './components';

const Wrapper = styled.div(
  ({ theme }) => css`
    border-top: 1px solid ${theme.accordion.border};
    border-bottom: 1px solid ${theme.accordion.border};
  `
);

export const Accordion = ({ children, className }: RWrapper) => (
  <AccordionContext>
    <Wrapper className={className}>{children}</Wrapper>
  </AccordionContext>
);

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
