import { Selectors, useAppSelector } from 'hooks/redux';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { PC_MEDIA } from 'styles/media';
import { ChatTab } from './chat-tab';
import { SettingTab } from './setting-tab';

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
  const page = useAppSelector(Selectors.page);

  return <Wrapper>{selectPage(page)}</Wrapper>;
};
