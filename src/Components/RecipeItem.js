import React, { useState } from 'react';
import "../styles/RecipeItem.css"

function RecipeItem({ image, name, category, instructions }) {
  const [showMore, setShowMore] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="recipeItem">
      <div className="header">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <button className={`favoriteButton ${isFavorite ? 'active' : ''}`} onClick={handleFavorite}>
          {isFavorite ? '❤️' : '♡'}
        </button>
      </div>
      <p>Category: {category}</p>
      {showMore && <p>Instructions: {instructions}</p>}
      <button onClick={handleToggle}>
        {showMore ? 'Show Less' : 'See More'}
      </button>
    </div>
  );
}

export default RecipeItem;
