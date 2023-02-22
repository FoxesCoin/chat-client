import { ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { Selectors, useAppSelector } from 'hooks/redux';

import { PRIMARY_COLOR_THEME, PROJECT_THEME } from 'constants/theme';

interface Props {
  children: ReactNode;
}

const getTheme = (
  primaryColor: PrimaryColor,
  theme: ThemeName
): DefaultTheme => ({
  ...PROJECT_THEME[theme],
  ...PRIMARY_COLOR_THEME[primaryColor],
});

export const ThemeContainer = (props: Props) => {
  const { children } = props;
  const { primaryColor, theme } = useAppSelector(Selectors.theme);
  const [projectTheme, setProjectTheme] = useState<DefaultTheme>(
    getTheme(primaryColor, theme)
  );

  useEffect(() => {
    setProjectTheme(getTheme(primaryColor, theme));
  }, [primaryColor, theme]);

  return <ThemeProvider theme={projectTheme}>{children}</ThemeProvider>;
};
