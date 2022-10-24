import styled from 'styled-components';

import { Picture } from 'components/picture';

import { cssAbsoluteCentralize, cssRound } from 'styles/theme';

interface CheckmarkStyled {
  isActive: boolean;
}

interface WrapperStyled {
  background: string;
  opacityBackground: string;
}

interface Props extends CheckmarkStyled, WrapperStyled {
  onClick: () => void;
}

const Wrapper = styled.div<WrapperStyled>`
  position: relative;
  background-color: ${(props) => props.background};
  border: 2px solid ${(props) => props.opacityBackground};

  ${cssRound('2.5rem')}

  &:hover {
    box-shadow: 0px 0px 5px 2px ${(props) => props.opacityBackground};
  }
`;

const Checkmark = styled(Picture)<CheckmarkStyled>`
  ${cssAbsoluteCentralize}

  position: absolute;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`;

export const ChooseThemeButton = (props: Props) => {
  const { isActive, background, opacityBackground, onClick } = props;

  return (
    <Wrapper
      background={background}
      opacityBackground={opacityBackground}
      onClick={onClick}
    >
      <Checkmark isActive={isActive} src="checkmark" />
    </Wrapper>
  );
};
