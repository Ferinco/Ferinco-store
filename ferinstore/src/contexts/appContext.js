import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export function AppProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
