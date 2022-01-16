import React, { useEffect, useState } from "react";
import Header from "./Header";
import SpaceContainer from "./SpaceContainer";

function App() {
  const [spaces, setSpaces] = useState([]);


  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=D8dBuqSBzpBPz9dOwJ5t2WoH78SBuLT2Ehy65lyZ`)
      .then((r) => r.json())
      .then(setSpaces);
  }, []);



  return (
    <div className="app">
      <Header />
      <SpaceContainer
      spaces={spaces}
        
      />
    </div>
  );
}

export default App;
