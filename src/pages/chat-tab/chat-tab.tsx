import { SearchBar } from 'components/search-bar';
import { SignButton } from 'components/sign-button';
import { AccountItem, ChatGroup, GroupItem } from './components';

import { useChatTabState } from './chat-tab.state';

import { Theme } from 'styles/theme';
import { ChatTabStyled as Styled } from './chat-tab.styled';

export const ChatTab = () => {
  const { favorite, account, channel, search, setSearch } = useChatTabState();

  return (
    <Styled.Wrapper>
      <Styled.TopBar>
        <Theme.FlexLine>
          <Theme.Text fontSize="h3" fontWeight="medium">
            Chats
          </Theme.Text>
          {/* TODO add correct function for this button */}
          <SignButton onClick={() => console.log('Sign')} />
        </Theme.FlexLine>
        <SearchBar value={search} onChange={setSearch} />
      </Styled.TopBar>

      <Styled.ChatList>
        <ChatGroup title="Favorite">
          {favorite.map((id) => (
            <AccountItem key={id} id={id} />
          ))}
        </ChatGroup>
        {/* TODO add correct function for this button */}
        <ChatGroup
          title="Direct messages"
          onClickSign={() => console.log('Sign')}
        >
          {account.map((id) => (
            <AccountItem key={id} id={id} />
          ))}
        </ChatGroup>
        {/* TODO add correct function for this button */}
        <ChatGroup title="Groups" onClickSign={() => console.log('Sign')}>
          {channel.map((id) => (
            <GroupItem key={id} id={id} />
          ))}
        </ChatGroup>
      </Styled.ChatList>
      {/* TODO add redirect to archived contacts */}
      <Styled.Archived>Archived Contacts</Styled.Archived>
    </Styled.Wrapper>
  );
};
