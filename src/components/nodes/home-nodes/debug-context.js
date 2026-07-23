import { createContext, useContext } from 'react';

export const DebugContext = createContext({
  showCoordinates: false,
  setShowCoordinates: () => undefined,
});

export const useDebug = () => useContext(DebugContext);
