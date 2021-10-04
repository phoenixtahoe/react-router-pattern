import React from "react";
import { BrowserRouter } from "react-router-dom";

import './App.css'

import Routes from "./Routes";


function App() {
  return (
    <div className="App">
      <div className="text-center">
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
