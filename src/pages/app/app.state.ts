import { useEffect } from 'react';

import { UserThunk } from 'utils/user';

import { useActionDispatch } from 'hooks/redux';

export const useAppState = () => {
  const fetchUser = useActionDispatch(UserThunk.fetchUser);

  useEffect(() => {
    fetchUser();
  }, []);
};
