import { createContext, useContext } from 'react';

type DebugContextValue = {
  showCoordinates: boolean;
  setShowCoordinates: (showCoordinates: boolean) => void;
};

export const DebugContext = createContext<DebugContextValue>({
  showCoordinates: false,
  setShowCoordinates: () => undefined,
});

export const useDebug = () => useContext(DebugContext);
