import { useReducer, useMemo } from "react";
import { StoreContext } from "./storeContext";
import { storeReducer, initialState } from "./storeReducer";

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}
