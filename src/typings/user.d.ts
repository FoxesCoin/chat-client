type ThemeName = 'light' | 'dark';
type PrimaryColor = 'green' | 'light-blue' | 'purple' | 'pink';
type UserStatus = 'active' | 'away' | 'disabled';

interface UserTheme {
  theme: ThemeName;
  primaryColor: PrimaryColor;
}

interface User {
  id: number;
  name: string;
  email: string;

  status: UserStatus;
  theme: UserTheme;
}
