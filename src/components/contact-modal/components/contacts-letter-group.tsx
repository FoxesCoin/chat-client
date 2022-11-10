import styled from 'styled-components';
import { cssVerticalCentralize } from 'styles/theme';
import { RWrapper } from 'typings/react';

interface Props {
  letter: string;
}

const Wrapper = styled.div`
  padding: 0.5rem 0.6rem;
`;

const Title = styled.div`
  position: relative;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 0.5rem;

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

export const ContactsLetterGroup: RWrapper<Props> = (props) => {
  const { letter, children } = props;

  return (
    <Wrapper>
      <Title>{letter}</Title>
      <ul>{children}</ul>
    </Wrapper>
  );
};
