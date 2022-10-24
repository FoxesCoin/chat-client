import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { AccordionContext } from './accordion.context';
import { AccordionContent, AccordionHeader } from './components';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div(
  ({ theme }) => css`
    border-top: 1px solid ${theme.accordion.border};
    border-bottom: 1px solid ${theme.accordion.border};
  `
);

export const Accordion = ({ children }: Props) => (
  <AccordionContext>
    <Wrapper>{children}</Wrapper>
  </AccordionContext>
);

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
