type ProjectTheme = 'light' | 'dark';
type PrimaryColor = 'green' | 'light-blue' | 'purple' | 'pick' | 'gray';
type UserStatus = 'active' | 'away' | 'disabled';

interface UserTheme {
  theme: ProjectTheme;
  primaryColor: PrimaryColor;
}

interface User {
  id: number;
  name: string;
  email: string;

  status: UserStatus;
  theme: UserTheme;
}
