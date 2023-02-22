import { useActionDispatch } from 'hooks/redux';
import { useEffect } from 'react';
import { UserThunk } from 'utils/user';

export const useAppState = () => {
  const fetchUser = useActionDispatch(UserThunk.fetchUser);

  useEffect(() => {
    fetchUser();
  }, []);
};
