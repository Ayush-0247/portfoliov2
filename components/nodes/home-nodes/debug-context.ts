import { createContext, useContext } from 'react';

export const DebugContext = createContext({
  showCoordinates: false,
  setShowCoordinates: (show: boolean) => {}
});

export const useDebug = () => useContext(DebugContext);
