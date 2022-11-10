import { ReactElement } from 'react';
import styled from 'styled-components';

import { ChatTab } from './chat-tab';
import { SettingTab } from './setting-tab';

import { useAppSelector } from 'hooks/redux';

import { PC_MEDIA } from 'styles/media';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};

  ${PC_MEDIA} {
    width: 300px;
  }
`;

const selectPage = (page: ChatPage): ReactElement | null => {
  switch (page) {
    case 'setting':
      return <SettingTab />;
    case 'chat':
      return <ChatTab />;

    default:
      return null;
  }
};

export const TabContent = () => {
  const page = useAppSelector((redux) => redux.app.page);

  return <Wrapper>{selectPage(page)}</Wrapper>;
};
