import { TabContent } from 'pages/tab-content';
import styled from 'styled-components';
import { MOBILE_MEDIA, PC_MEDIA } from 'styles/media';
import { SideBar } from '../side-bar';
import { useAppState } from './app.state';

const Wrapper = styled.main`
  display: grid;

  ${PC_MEDIA} {
    grid-template-columns: 300px 1fr;
  }

  ${MOBILE_MEDIA} {
    margin-bottom: 3.5rem;
  }
`;

export const App = () => {
  useAppState();

  return (
    <>
      <SideBar />
      <Wrapper>
        <TabContent />
      </Wrapper>
    </>
  );
};
