import { useShowState } from 'hooks/show';

export const useChatTabState = () => {
  const {
    isShow: isOpenContacts,
    show: openContacts,
    hide: closeContacts,
  } = useShowState(false);

  const searchConnection = (search: string) => {
    console.log(search);
    return;
  };

  //TODO add correct function for this button
  const addNewContact = () => {
    return;
  };

  //TODO add correct function for this button
  const addContact = (user: User) => {
    closeContacts();
    console.log(user);
  };

  //TODO add correct function for this button
  const addGroup = () => {
    return;
  };

  return {
    favorite: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    account: [1, 2, 3, 4, 5],
    channel: [1, 2, 3, 4, 5],
    isOpenContacts,
    searchConnection,
    addNewContact,
    addContact,
    addGroup,
    openContacts,
    closeContacts,
  };
};
