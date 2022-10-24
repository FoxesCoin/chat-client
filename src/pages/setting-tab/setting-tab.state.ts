import { useActionDispatch, useAppSelector } from 'hooks/redux';
import { UserThunk } from 'utils/user';

export const useSettingTabState = () => {
  const { primaryColor, theme } = useAppSelector(
    (redux) => redux.user.user.theme
  );
  const updateUser = useActionDispatch(UserThunk.updateTheme);

  const changeTheme = (newTheme: ThemeName) => () =>
    updateUser({ theme: newTheme });
  const changePrimaryColor = (newPrimaryColor: PrimaryColor) => () =>
    updateUser({ primaryColor: newPrimaryColor });

  return { primaryColor, theme, changeTheme, changePrimaryColor };
};
