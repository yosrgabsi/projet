import React, { useEffect, useState } from 'react';
import RecipeItem from '../Components/RecipeItem'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        if (data.meals) {
          const updatedMeals = data.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            image: meal.strMealThumb,
            category: meal.strCategory,
            instructions: meal.strInstructions,
          }));
          setMeals(updatedMeals);
        } else {
          setMeals([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeals();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Recipes</h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="menuList">
        {meals.map((meal) => (
          <RecipeItem
            key={meal.id}
            image={meal.image}
            name={meal.name}
            category={meal.category}
            instructions={meal.instructions}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
