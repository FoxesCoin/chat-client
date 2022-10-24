type ChatPage =
  | 'profile'
  | 'chat'
  | 'contact'
  | 'call'
  | 'bookmark'
  | 'setting';

type SetState<T> = (value: T | ((current: T) => T)) => void;
