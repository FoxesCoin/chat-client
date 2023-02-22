import { MOCK_USERS } from 'constants/user.mock';
import { useEffect, useState } from 'react';

type AlphabetUsers = Record<string, User[]>;

export const useContactModalState = () => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>();

  const [alphabetUsers, setAlphabetUsers] = useState<AlphabetUsers>({});
  const [fetchedUsers, setFetchedUsers] = useState<User[]>([]);

  const organizeUserList = (users: User[]) => {
    const mapOfUser = new Map<string, User[]>();
    users.forEach((user) => {
      const letter = user.name[0];
      const userList = mapOfUser.has(letter)
        ? [...(mapOfUser.get(letter) ?? []), user]
        : [user];
      mapOfUser.set(letter, userList);
    });

    const sortedList = [...mapOfUser.entries()].sort((first, second) =>
      first[0] > second[0] ? 1 : -1
    );
    sortedList.forEach(([, list]) =>
      list.sort((first, second) => (first.name > second.name ? 1 : -1))
    );

    setAlphabetUsers(Object.fromEntries(sortedList));
  };

  const searchUser = (search: string) => {
    const value = search.trim();
    if (value === '') {
      return organizeUserList(fetchedUsers);
    }
    const searchedUsers = fetchedUsers.filter((user) =>
      user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    organizeUserList(searchedUsers);
  };

  const selectUser = (id: number) => () => {
    setSelectedUser(fetchedUsers.find((user) => user.id === id));
  };

  useEffect(() => {
    const users = MOCK_USERS;
    setFetchedUsers(users);
    organizeUserList(users);
  }, []);

  return {
    selectedUser,
    alphabetUsers,
    searchUser,
    selectUser,
  };
};
