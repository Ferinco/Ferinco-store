import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
