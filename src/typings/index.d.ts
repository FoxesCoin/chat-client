import 'styled-components';

export interface ThemeParameter {
  background: string;
  icon: string;
  text: string;

  accordion: {
    border: string;
    active: string;
  };

  switch: {
    border: string;
    dot: string;
    background: string;
  };

  chat: {
    unreadCounter: string;
  };

  search: {
    placeholder: string;
    background: string;
    icon: string;
  };
}

export interface PrimaryColorTheme {
  primaryColor: string;
  opacityPrimaryColor: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeParameter, PrimaryColorTheme {}
}
