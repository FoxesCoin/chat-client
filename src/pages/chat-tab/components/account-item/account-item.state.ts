import { useMemo } from 'react';

interface State {
  id: number;
  logo: string | null;
  name: string;
  status: UserStatus;
  unreadMessage: number;
  isActive: boolean;
}

export const useAccountItemState = (id: number): State => {
  const memo = useMemo<State>(
    () => ({
      id,
      logo: null,
      isActive: false,
      name: 'Test',
      status: 'active',
      unreadMessage: 8,
    }),
    []
  );
  return memo;
};
