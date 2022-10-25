import { ReactElement } from 'react';
import styled from 'styled-components';

import { ChatTab } from './chat-tab';
import { SettingTab } from './setting-tab';

interface Props {
  page: ChatPage;
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
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

export const TabContent = (props: Props) => {
  const { page } = props;

  return <Wrapper>{selectPage(page)}</Wrapper>;
};
