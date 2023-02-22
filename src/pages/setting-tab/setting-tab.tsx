import { Accordion } from 'components/accordion';
import { Switch } from 'components/switch';
import { PRIMARY_COLOR_THEME } from 'constants/theme';
import styled from 'styled-components';
import { cssVerticalGap, Theme } from 'styles/theme';
import { getObjectEntries } from 'utils/object';
import { ChooseThemeButton } from './components';
import { useSettingTabState } from './setting-tab.state';

const Content = styled(Accordion.Content)`
  ${cssVerticalGap('1.5rem')}
`;
const ColorList = styled(Theme.GapRow)`
  justify-content: center;
`;

export const SettingTab = () => {
  const { switchTheme, changePrimaryColor, primaryColor, theme } =
    useSettingTabState();

  return (
    <Accordion>
      <Accordion.Header>Theme</Accordion.Header>
      <Content>
        <Theme.FlexLine>
          <Theme.Paragraph>Light theme</Theme.Paragraph>
          <Switch isActive={theme === 'light'} onClick={switchTheme} />
        </Theme.FlexLine>
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
