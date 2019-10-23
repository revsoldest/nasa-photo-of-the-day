import React from "react";
import "./App.css";
import NasaApi from "./Component/nasaList";

function App() {
  return (
    <div className="App">
      <h2> NASA Images of The Day!! </h2>
      <NasaApi />
    </div>
  );
}

export default App;
