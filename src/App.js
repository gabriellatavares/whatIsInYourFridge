import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar'
import { v4 as uuidv4 } from 'uuid'
import image from './images/burgundy-20.png'
import './App.css';

function App() {

  const APP_ID = 'c6aa74d3';
  const APP_KEY = '86c94b40a4cf0d138ac72c1e4a5d2ec8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  useEffect( ()=> {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes)
  }
  const updateSearch = e => {
    setSearch(e.target.value) 
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
 
  return (
    <div className="App">
      <Navbar />
      <div className="landingPage">
        <div>
          <h3>Cook some <span>delicious recipes </span>with what you have at home!</h3>
        <p>Are you a foodie? What's in your fridge will help you find the perfect recipe for you. This is your online cookbook.</p>
      </div>
      <img src={image} alt="" className="firstPage" />
      </div>
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" value={search} placeholder="What's in your fridge?" onChange={updateSearch}/>
       <button className="search-button" type="submit"> Search </button>
     </form>
    <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
            key={uuidv4()} 
            totalTime={recipe.recipe.totalTime}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            sourceRecipe={recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
