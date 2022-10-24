import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from 'utils/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type Func = (...args: any[]) => any;
export const useActionDispatch = <T extends Func>(action: T) => {
  const dispatch = useAppDispatch();

  return (...args: Parameters<T>): ReturnType<T> => dispatch(action(...args));
};
