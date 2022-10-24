import { TabContent } from 'pages/tab-content';
import { SideBar } from '../side-bar';

import { useAppState } from './app.state';

const App = () => {
  const { page, selectPage } = useAppState();

  return (
    <>
      <SideBar page={page} selectPage={selectPage} />
      <TabContent page={page} />
    </>
  );
};

export default App;
