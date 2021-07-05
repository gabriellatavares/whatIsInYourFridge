//O que falta fazer: 
//- CSS da página dos favoritos
//- footer

import React, {useState} from 'react';
import AddFavorite from './AddFavorite'
import { v4 as uuidv4 } from 'uuid'
       
const Details = (props) => {
  const recipe = props.location.aboutProps;
  

  if (recipe === undefined) {
    window.location = '/favs'
  } else {
  return (
    <div className="detailsPage">
      <div><h3>Check out this recipe</h3>
        <h2>{recipe.name}</h2>

        <AddFavorite
        name = {recipe.name}
        calories = {recipe.calories}
        image = {recipe.image}
        ingredients = {recipe.ingredients}
        sourceRecipe = {recipe.sourceRecipe}/>
        <div>
        <ul>Ingredients: 
            { recipe.ingredients.map( ingredient => (
              <li key={uuidv4()}>{ingredient.text}</li>
            ))}
          </ul>
          <p>{Math.round(recipe.calories)} calories</p>
        </div>
    </div>
    <div className="detailsImg">
       <img src={recipe.image} alt={recipe.name} className="imgRecipes" />
        
        <a className="linkRecipe" href={recipe.sourceRecipe} target="_blank" rel="noopener noreferrer">
           Interested? Click this link and check the recipe from the original source.
       </a>
     </div>         
     
    </div>
    
  );
         }
}

export default Details;