import React from "react";
import Header from "./components/layout/Header";
import MemeCollection from "./components/memes/MemeCollection";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MemeCollection />
    </React.Fragment>
  );
}

export default App;
