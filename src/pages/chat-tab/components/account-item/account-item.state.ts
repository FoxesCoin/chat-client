interface State {
  logo: string | null;
  name: string;
  status: UserStatus;
  unreadMessage: number;
  isActive: boolean;
}

export const useAccountItemState = (id: number): State => {
  console.log('Loading account', id);

  return {
    logo: null,
    isActive: false,
    name: 'Test',
    status: 'active',
    unreadMessage: 8,
  };
};
