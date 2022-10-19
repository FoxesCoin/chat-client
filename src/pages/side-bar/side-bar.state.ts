import { useCallback, useState } from 'react';
import { SideBarTemplate } from './components';

export type ChatPage = 'profile' | 'chat' | 'contact' | 'call' | 'bookmark';

export const useSideBarState = () => {
  const [page, setPage] = useState<ChatPage>('chat');

  const selectPage = useCallback(
    (newPage: ChatPage) => () => setPage(newPage),
    []
  );

  const createTemplateItem = (template: ChatPage): SideBarTemplate => ({
    isActive: template === page,
    onClick: selectPage(template),
  });

  return { page, createTemplateItem };
};
