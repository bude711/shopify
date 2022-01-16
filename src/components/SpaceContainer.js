import React from "react";
import SpaceCard from "./SpaceCard";

function SpaceContainer({ spaces}) {

  return (
    <main>
      <ul className="cards">       

        <SpaceCard spaces={spaces} />

      </ul>
    </main>
  );
}

export default SpaceContainer;
