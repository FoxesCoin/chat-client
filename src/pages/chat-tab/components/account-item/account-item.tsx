import { ChatItemWrapper, UnreadMessage } from 'pages/chat-tab/chat-tab.styled';
import { memo } from 'react';
import { Theme } from 'styles/theme';
import { RElement } from 'typings/react';
import { useAccountItemState } from './account-item.state';
import { AccountItemStyled as Styled } from './account-item.styled';

interface Props {
  id: number;
}

export const AccountItem = memo(({ className, id }: RElement<Props>) => {
  const { logo, name, status, unreadMessage, isActive } =
    useAccountItemState(id);

  return (
    <ChatItemWrapper isActive={isActive} className={className}>
      <Theme.GapRow>
        <Styled.LogoWrapper>
          <Styled.Logo logo={logo} />
          <Styled.Status status={status} />
        </Styled.LogoWrapper>
        <Theme.Text
          fontSize="small"
          fontWeight={unreadMessage ? 'medium' : 'regular'}
        >
          {name}
        </Theme.Text>
      </Theme.GapRow>
      {unreadMessage && isActive && (
        <UnreadMessage>{unreadMessage}</UnreadMessage>
      )}
    </ChatItemWrapper>
  );
});
AccountItem.displayName = 'AccountItem';
