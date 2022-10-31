import { SignButton } from 'components/sign-button';

import { Theme } from 'styles/theme';
import { ChatGroupStyled as Styled } from './chat-group.styled';

import { RWrapper } from 'typings/react';

interface Props {
  title: string;

  onClickSign?: () => void;
}

export const ChatGroup: RWrapper<Props> = (props) => {
  const { className, title, children, onClickSign } = props;

  return (
    <Theme.GapColumn gap="1rem" className={className}>
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
        {onClickSign && <SignButton onClick={onClickSign} />}
      </Styled.TitleWrapper>
      <Theme.GapColumn>{children}</Theme.GapColumn>
    </Theme.GapColumn>
  );
};
