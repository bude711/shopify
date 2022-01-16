import React, { useState } from "react";

function SpaceCard({
  spaces: { date, explanation, title, url }
}) {
  const [favorite, setFavorite] = useState(false);


  return (
    <li className="card">
      <div className="image">
        <img src={url} alt={title} />
      </div>
      <div className="details">
        <strong>{title}</strong>
        <h4> {date}</h4>
        <p> {explanation}</p>

        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ❤️ Liked
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ♡ Like
          </button>
        )}
      
      </div>
    </li>
  );
}

export default SpaceCard;