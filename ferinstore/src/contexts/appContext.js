import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export function AppProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openAddSlide, setOpenAddSlide] = useState(false);

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        openAddSlide,
        setOpenAddSlide
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
