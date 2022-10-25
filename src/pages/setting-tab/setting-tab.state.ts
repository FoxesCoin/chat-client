import { useActionDispatch, useAppSelector } from 'hooks/redux';
import { UserThunk } from 'utils/user';

export const useSettingTabState = () => {
  const { primaryColor, theme } = useAppSelector(
    (redux) => redux.user.user.theme
  );
  const updateUser = useActionDispatch(UserThunk.updateTheme);

  const switchTheme = () =>
    updateUser({ theme: theme === 'light' ? 'dark' : 'light' });
  const changePrimaryColor = (newPrimaryColor: PrimaryColor) => () =>
    updateUser({ primaryColor: newPrimaryColor });

  return { primaryColor, theme, switchTheme, changePrimaryColor };
};
