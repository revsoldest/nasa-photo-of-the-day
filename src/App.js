import React from "react";

import "./App.css";
import './bootstrap-4.3.1-dist/css/bootstrap.min.css';

import NasaApi from "./Component/NasaApi";



function App() {
  return (
    <div className="App">
      <h2> NASA Images of The Day!! </h2>
      <NasaApi />
    </div>
  );
}

export default App;
