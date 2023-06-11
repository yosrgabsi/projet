import React, { useState } from 'react';
import "../styles/RecipeItem.css"
function RecipeItem({ image, name, category, instructions }) {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="recipeItem">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Category: {category}</p>
      {showMore && <p>Instructions: {instructions}</p>}
      <button onClick={handleToggle}>
        {showMore ? 'Show Less' : 'See More'}
      </button>
    </div>
  );
}

export default RecipeItem;
