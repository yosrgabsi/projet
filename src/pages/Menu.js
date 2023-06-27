import React, { useEffect, useState } from 'react';
import RecipeItem from '../Components/RecipeItem';
import "../styles/Menu.css";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredientTerm, setIngredientTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [popularIngredients, setPopularIngredients] = useState([]);

  useEffect(() => {
    const fetchPopularIngredients = async () => {
      try {
        const response = await fetch(
          'www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
        );
        const data = await response.json();
        if (data.meals) {
          const ingredients = data.meals.map((meal) => meal.strIngredient1);
          setPopularIngredients(ingredients);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularIngredients();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        if (ingredientTerm) {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientTerm}`;
        }

        const response = await fetch(url);
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
  }, [searchTerm, ingredientTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleIngredientSearchChange = (e) => {
    setIngredientTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIngredientTerm('');
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Recipes</h1>
      <div className="popularIngredients">
        {popularIngredients.length > 0 ? (
          popularIngredients.map((ingredient, index) => (
            <div key={index} className="ingredientCard">
              <h2>Popular Ingredient:</h2>
              <p>{ingredient}</p>
            </div>
          ))
        ) : (
          <h2>Loading popular ingredients...</h2>
        )}
      </div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by Recipe Name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button className="clearButton" onClick={() => setSearchTerm('')}>
            x
          </button>
        )}
      </div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by Ingredient..."
          value={ingredientTerm}
          onChange={handleIngredientSearchChange}
        />
        {ingredientTerm && (
          <button className="clearButton" onClick={() => setIngredientTerm('')}>
            x
          </button>
        )}
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
