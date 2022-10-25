import styled, { css } from 'styled-components';

import { useChangeEvent } from 'hooks/event';

import { RElement } from 'typings/react';

import { ReactComponent as Search } from 'assets/icons/search.svg';
import { FONT_SIZES } from 'styles/font';
import { cssSquare } from 'styles/theme';

interface Props {
  value: string;

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

const Icon = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    right: 1rem;

    svg {
      ${cssSquare('1rem')}

      path {
        fill: ${theme.search.icon};
      }
    }
  `
);

export const SearchBar: RElement<Props> = (props) => {
  const { className, value, onChange } = props;

  const handleChange = useChangeEvent(onChange);

  return (
    <Wrapper className={className}>
      <Input
        onChange={handleChange}
        value={value}
        placeholder="Search here.."
      />
      <Icon>
        <Search />
      </Icon>
    </Wrapper>
  );
};
