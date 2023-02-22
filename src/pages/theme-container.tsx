import { PRIMARY_COLOR_THEME, PROJECT_THEME } from 'constants/theme';
import { Selectors, useAppSelector } from 'hooks/redux';
import { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { RWrapper } from 'typings/react';

const getTheme = (
  primaryColor: PrimaryColor,
  theme: ThemeName
): DefaultTheme => ({
  ...PROJECT_THEME[theme],
  ...PRIMARY_COLOR_THEME[primaryColor],
});

export const ThemeContainer = ({ children }: RWrapper) => {
  const { primaryColor, theme } = useAppSelector(Selectors.theme);
  const [projectTheme, setProjectTheme] = useState<DefaultTheme>(
    getTheme(primaryColor, theme)
  );

  useEffect(() => {
    setProjectTheme(getTheme(primaryColor, theme));
  }, [primaryColor, theme]);

  return <ThemeProvider theme={projectTheme}>{children}</ThemeProvider>;
};
