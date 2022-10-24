import styled from 'styled-components';

import { Accordion } from 'components/accordion';
import { ChooseThemeButton } from './components';

import { getObjectEntries } from 'utils/object';
import { useSettingTabState } from './setting-tab.state';

import { PRIMARY_COLOR_THEME } from 'constants/theme';

import { Theme } from 'styles/theme';

const Content = styled(Accordion.Content)`
  & > * + * {
    margin-top: 1.5rem;
  }
`;
const ColorList = styled(Theme.GapRow)`
  justify-content: center;
`;

export const SettingTab = () => {
  const { changeTheme, changePrimaryColor, primaryColor } =
    useSettingTabState();

  return (
    <Accordion>
      <Accordion.Header>Theme</Accordion.Header>
      <Content>
        <Theme.GapColumn>
          <Theme.Paragraph>Theme</Theme.Paragraph>
          <button onClick={changeTheme('light')}>Light</button>
          <button onClick={changeTheme('dark')}>Dark</button>
        </Theme.GapColumn>
        <Theme.GapColumn>
          <Theme.Paragraph>Primary color</Theme.Paragraph>
          <ColorList gap="1rem">
            {getObjectEntries(PRIMARY_COLOR_THEME).map(([name, value]) => (
              <ChooseThemeButton
                key={name}
                isActive={primaryColor === name}
                onClick={changePrimaryColor(name)}
                background={value.primaryColor}
                opacityBackground={value.opacityPrimaryColor}
              />
            ))}
          </ColorList>
        </Theme.GapColumn>
      </Content>
    </Accordion>
  );
};
