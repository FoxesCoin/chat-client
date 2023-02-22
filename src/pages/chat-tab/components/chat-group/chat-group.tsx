import { SignButton } from 'components/sign-button';
import { Theme } from 'styles/theme';
import { RWrapper } from 'typings/react';
import { ChatGroupStyled as Styled } from './chat-group.styled';

interface Props {
  title: string;

  onClickSign?: () => void;
}

export const ChatGroup = ({
  className,
  title,
  children,
  onClickSign,
}: RWrapper<Props>) => (
  <Theme.GapColumn gap="1rem" className={className}>
    <Styled.TitleWrapper>
      <Styled.Title>{title}</Styled.Title>
      {onClickSign && <SignButton onClick={onClickSign} />}
    </Styled.TitleWrapper>
    <Theme.GapColumn>{children}</Theme.GapColumn>
  </Theme.GapColumn>
);
