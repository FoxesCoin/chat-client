import { RElement } from 'typings/react';
import { getObjectEntries } from 'utils/object';
import { ModalPage } from '../modal-page';
import { ContactsLetterGroup, ContactsUserItem } from './components';
import { useContactModalState } from './contact-modal.state';
import { ContactModalStyled as Styled } from './contact-modal.styled';

interface Props {
  isOpen: boolean;

  onClose: () => void;
  onConfirm: (user: User) => void;
}

export const ContactModal = ({
  isOpen,
  onClose,
  onConfirm,
}: RElement<Props>) => {
  const { selectedUser, alphabetUsers, searchUser, selectUser } =
    useContactModalState();

  const handleConfirm = () => {
    if (!selectedUser) {
      return;
    }
    onConfirm(selectedUser);
  };

  return (
    <ModalPage
      isDisabledConfirm={!selectedUser}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      title="Select user"
    >
      <Styled.SearchInput onChange={searchUser} />
      <Styled.Content>
        {getObjectEntries(alphabetUsers).map(([letter, contacts]) => (
          <ContactsLetterGroup letter={letter} key={letter}>
            {contacts.map(({ name, id }) => (
              <ContactsUserItem
                isActive={selectedUser?.id === id}
                name={name}
                key={id}
                onClick={selectUser(id)}
              />
            ))}
          </ContactsLetterGroup>
        ))}
      </Styled.Content>
    </ModalPage>
  );
};
