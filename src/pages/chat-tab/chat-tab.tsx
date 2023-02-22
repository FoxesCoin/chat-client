import { ContactModal } from 'components/contact-modal';
import { SearchBar } from 'components/search-bar';
import { SignButton } from 'components/sign-button';
import { Theme } from 'styles/theme';
import { useChatTabState } from './chat-tab.state';
import { ChatTabStyled as Styled } from './chat-tab.styled';
import { AccountItem, ChatGroup, GroupItem } from './components';

export const ChatTab = () => {
  const {
    favorite,
    account,
    channel,
    isOpenContacts,
    searchConnection,
    addNewContact,
    addContact,
    addGroup,
    openContacts,
    closeContacts,
  } = useChatTabState();

  return (
    <Styled.Wrapper>
      <Styled.TopBar>
        <Theme.FlexLine>
          <Theme.Text fontSize="h3" fontWeight="medium">
            Chats
          </Theme.Text>
          <SignButton onClick={addNewContact} />
        </Theme.FlexLine>
        <SearchBar onChange={searchConnection} />
      </Styled.TopBar>

      <Styled.ChatList>
        <ChatGroup title="Favorite">
          {favorite.map((id) => (
            <AccountItem key={id} id={id} />
          ))}
        </ChatGroup>
        <ChatGroup title="Direct messages" onClickSign={openContacts}>
          {account.map((id) => (
            <AccountItem key={id} id={id} />
          ))}
        </ChatGroup>
        <ChatGroup title="Groups" onClickSign={addGroup}>
          {channel.map((id) => (
            <GroupItem key={id} id={id} />
          ))}
        </ChatGroup>
      </Styled.ChatList>
      {/* TODO add redirect to archived contacts */}
      <Styled.Archived>Archived Contacts</Styled.Archived>
      <ContactModal
        isOpen={isOpenContacts}
        onConfirm={addContact}
        onClose={closeContacts}
      />
    </Styled.Wrapper>
  );
};
