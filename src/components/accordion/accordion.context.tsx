import { useContextHandler } from 'hooks/context';
import { useMemo, useState } from 'react';
import { RWrapper } from 'typings/react';
import { generateContext } from 'utils/react';

const State = generateContext<boolean>('AccordionStateContext');
const Api = generateContext<SetState<boolean>>('AccordionApiContext');

export const useAccordionState = () =>
  useContextHandler(State, 'AccordionState');
export const useAccordionApi = () => useContextHandler(Api, 'AccordionApi');

export const AccordionContext = ({ children }: RWrapper) => {
  const [isOpen, setIsOpen] = useState(false);

  const state = useMemo(() => isOpen, [isOpen]);
  const api = useMemo(() => setIsOpen, []);

  return (
    <Api.Provider value={api}>
      <State.Provider value={state}>{children}</State.Provider>
    </Api.Provider>
  );
};
