import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { AppProvider } from "./contexts/appContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
