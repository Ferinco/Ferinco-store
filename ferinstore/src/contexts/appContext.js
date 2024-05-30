import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export function AppProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openAddSlide, setOpenAddSlide] = useState(false);
  const [cartItem, setCartItem] = useState(0);
  const [alert, setAlert] = useState(false);


  return (
    <AppContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        openAddSlide,
        setOpenAddSlide,
        cartItem,
        setCartItem,
        alert,
        setAlert
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
