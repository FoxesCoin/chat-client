interface State {
  id: number;
  name: string;
  unreadMessage: number;
  isActive: boolean;
}

export const useGroupItemState = (id: number): State => ({
  id,
  name: 'Test group',
  unreadMessage: 8,
  isActive: false,
});
