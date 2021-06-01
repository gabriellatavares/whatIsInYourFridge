import React from 'react'; 
import { v4 as uuidv4 } from 'uuid'


const Recipe = ({title, calories, image, ingredients, sourceRecipe}) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>Ingredients: 
        {ingredients.map( ingredient => (
          <li key={uuidv4()}>{ingredient.text}</li>
        ))}
      </ul>
      <p>{Math.round(calories)} calories</p>
      <img src={image} alt={title} />
      <a href={sourceRecipe} target="_blank" rel="noopener noreferrer">
          Interested? Click this link and check the recipe from the original source.
      </a>
       
    </div>
  )
}
export default Recipe;