import { useShowState } from 'hooks/show';

const MOCKED_FAVORITE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const MOCKED_ACCOUNT = [1, 2, 3, 4, 5];
const MOCKED_CHANNEL = [1, 2, 3, 4, 5];

export const useChatTabState = () => {
  const {
    isShow: isOpenContacts,
    show: openContacts,
    hide: closeContacts,
  } = useShowState(false);

  const searchConnection = (/*search: string*/) => {
    return;
  };

  //TODO add correct function for this button
  const addNewContact = () => {
    return;
  };

  //TODO add correct function for this button
  const addContact = (/*user: User*/) => {
    closeContacts();
  };

  //TODO add correct function for this button
  const addGroup = () => {
    return;
  };

  return {
    favorite: MOCKED_FAVORITE,
    account: MOCKED_ACCOUNT,
    channel: MOCKED_CHANNEL,
    isOpenContacts,
    searchConnection,
    addNewContact,
    addContact,
    addGroup,
    openContacts,
    closeContacts,
  };
};
