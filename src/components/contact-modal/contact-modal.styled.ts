import styled from 'styled-components';

import { SearchBar } from 'components/search-bar';

import { PC_MEDIA } from 'styles/media';

import { cssHideScrollbar } from 'styles/theme';

export const ContactModalStyled = {
  Content: styled.div`
    overflow: auto;
    ${cssHideScrollbar}

    ${PC_MEDIA} {
      height: 400px;
    }

    & :last-child {
      margin-bottom: 0.5rem;
    }
  `,

  SearchInput: styled(SearchBar)`
    margin: 0.5rem 0.6rem;
  `,
};
