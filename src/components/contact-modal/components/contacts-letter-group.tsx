import styled from 'styled-components';
import { cssVerticalCentralize } from 'styles/theme';
import { RWrapper } from 'typings/react';

interface Props {
  letter: string;
}

const Title = styled.div`
  margin: 0.5rem 1.5rem;
  position: relative;
  color: ${(props) => props.theme.primaryColor};

  &::after {
    content: '';
    position: absolute;

    height: 1px;
    display: block;
    background-color: white;
    width: calc(100% - 30px);
    right: 0;

    ${cssVerticalCentralize}
  }
`;

export const ContactsLetterGroup = ({ letter, children }: RWrapper<Props>) => (
  <>
    <Title>{letter}</Title>
    <ul>{children}</ul>
  </>
);
