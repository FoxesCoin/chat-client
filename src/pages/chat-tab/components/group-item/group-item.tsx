import { ChatItemWrapper, UnreadMessage } from 'pages/chat-tab/chat-tab.styled';

import { useGroupItemState } from './group-item.state';

import { RElement } from 'typings/react';

import { Theme } from 'styles/theme';

interface Props {
  id: number;
}

export const GroupItem: RElement<Props> = (props) => {
  const { className, id } = props;
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
