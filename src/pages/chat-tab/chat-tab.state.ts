import { useState } from 'react';

export const useChatTabState = () => {
  const [search, setSearch] = useState('');

  return {
    favorite: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    account: [1, 2, 3, 4, 5],
    channel: [1, 2, 3, 4, 5],
    search,
    setSearch,
  };
};
