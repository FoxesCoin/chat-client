import { SideBarItem, SideBarTemplate } from './components';

import { Selectors, useActionDispatch, useAppSelector } from 'hooks/redux';
import { AppActions } from 'utils/app';

import { SideBarStyled as Styled } from './side-bar.styled';

import { ReactComponent as Bookmark } from 'assets/icons/side-bar/bookmark.svg';
import { ReactComponent as Chat } from 'assets/icons/side-bar/chat.svg';
import { ReactComponent as Contact } from 'assets/icons/side-bar/contact.svg';
import { ReactComponent as Phone } from 'assets/icons/side-bar/phone.svg';
import { ReactComponent as ProfileIcon } from 'assets/icons/side-bar/profile.svg';
import { ReactComponent as Setting } from 'assets/icons/side-bar/setting.svg';

export const SideBar = () => {
  const page = useAppSelector(Selectors.page);
  const selectPage = useActionDispatch(AppActions.selectPage);

  const createTemplateItem = (template: ChatPage): SideBarTemplate => ({
    isActive: template === page,
    onClick: () => selectPage(template),
  });

  return (
    <Styled.Wrapper>
      <Styled.Navigation>
        <SideBarItem {...createTemplateItem('profile')}>
          <ProfileIcon />
        </SideBarItem>
        <SideBarItem {...createTemplateItem('chat')}>
          <Chat />
        </SideBarItem>
        <SideBarItem {...createTemplateItem('contact')}>
          <Contact />
        </SideBarItem>
        <SideBarItem {...createTemplateItem('call')}>
          <Phone />
        </SideBarItem>
        <SideBarItem {...createTemplateItem('bookmark')}>
          <Bookmark />
        </SideBarItem>
      </Styled.Navigation>
      <Styled.Setting>
        <SideBarItem {...createTemplateItem('setting')}>
          <Setting />
        </SideBarItem>
      </Styled.Setting>
    </Styled.Wrapper>
  );
};
