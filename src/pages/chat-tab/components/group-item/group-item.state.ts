interface State {
  name: string;
  unreadMessage: number;
  isActive: boolean;
}

export const useGroupItemState = (id: number): State => {
  console.log('Load group information', id);

  return {
    name: 'Test group',
    unreadMessage: 8,
    isActive: false,
  };
};
