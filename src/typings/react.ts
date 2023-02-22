import { ReactNode } from 'react';

interface ReactElement {
  className?: string;
  children?: null;
}

interface ReactWrapper {
  className?: string;
  children: ReactNode;
}

export type RElement<T = {}> = T & ReactElement;
export type RWrapper<T = {}> = T & ReactWrapper;
