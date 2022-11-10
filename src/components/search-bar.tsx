import styled, { css } from 'styled-components';

import { useDebounceChangeEvent } from 'hooks/event';

import { RElement } from 'typings/react';

import { ReactComponent as Search } from 'assets/icons/search.svg';
import { FONT_SIZES } from 'styles/font';
import { cssSquare } from 'styles/theme';

interface Props {
  onChange: (value: string) => void;
}

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input(
  ({ theme }) => css`
    padding: 0.5rem 2rem 0.5rem 1rem;
    width: 100%;
    border-radius: 0.25rem;
    background-color: ${theme.search.background};

    &,
    &::placeholder {
      color: ${theme.text};
      font-size: ${FONT_SIZES.small};
    }

    &::placeholder {
      color: ${theme.search.placeholder};
    }
  `
);

const Icon = styled(Search)`
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  right: 1rem;

  ${cssSquare('1rem')}

  path {
    fill: ${(props) => props.theme.search.icon};
  }
`;

export const SearchBar: RElement<Props> = (props) => {
  const { className, onChange } = props;

  const handleChange = useDebounceChangeEvent(onChange);

  return (
    <Wrapper className={className}>
      <Input placeholder="Search here.." onChange={handleChange} />
      <Icon />
    </Wrapper>
  );
};
