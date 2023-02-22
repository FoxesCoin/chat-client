import { useAutoHeightAnimation } from 'hooks/animate';
import styled from 'styled-components';
import { RWrapper } from 'typings/react';
import { useAccordionState } from '../accordion.context';

const Wrapper = styled.div<{ height: number }>`
  overflow: hidden;
  transition: 0.2s height ease-in-out;
  height: ${(props) => props.height}px;
`;

const Content = styled.div`
  padding: 1.25rem;
`;

export const AccordionContent = ({ className, children }: RWrapper) => {
  const isOpen = useAccordionState();
  const [ref, height] = useAutoHeightAnimation<HTMLDivElement>(isOpen);

  return (
    <Wrapper ref={ref} height={height}>
      <Content className={className}>{children}</Content>
    </Wrapper>
  );
};
