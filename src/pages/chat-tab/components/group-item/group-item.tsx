import { ChatItemWrapper, UnreadMessage } from 'pages/chat-tab/chat-tab.styled';
import { Theme } from 'styles/theme';
import { RElement } from 'typings/react';
import { useGroupItemState } from './group-item.state';

interface Props {
  id: number;
}

export const GroupItem = ({ className, id }: RElement<Props>) => {
  const { name, unreadMessage, isActive } = useGroupItemState(id);

  return (
    <ChatItemWrapper isActive={isActive} className={className}>
      <Theme.GapRow>
        <Theme.Text>#</Theme.Text>
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
};
