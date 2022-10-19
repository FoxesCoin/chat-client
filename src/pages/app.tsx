import { useEffect } from 'react';

import { SideBar } from './side-bar';

import { useAppDispatch } from 'hooks/redux';
import { fetchUser } from 'utils/user';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <SideBar />
    </>
  );
};

export default App;
