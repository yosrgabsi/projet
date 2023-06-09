import React from 'react';

function RecipeItem({ image, name }) {
  return (
    <div className="recipeItem">
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default RecipeItem;
