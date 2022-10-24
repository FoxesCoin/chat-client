import { useCallback, useEffect, useState } from 'react';

import { UserThunk } from 'utils/user';

import { useActionDispatch } from 'hooks/redux';

export const useAppState = () => {
  const [page, setPage] = useState<ChatPage>('chat');

  const fetchUser = useActionDispatch(UserThunk.fetchUser);
  const selectPage = useCallback(
    (newPage: ChatPage) => () => setPage(newPage),
    []
  );

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    page,
    selectPage,
  };
};
