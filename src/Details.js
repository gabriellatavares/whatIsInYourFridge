//O que falta fazer: 
//- fix error when I refresh the detail page 
//- CSS da página de detalhes da receita e dos favoritos
//- footer

import AddFavorite from './AddFavorite'
import { v4 as uuidv4 } from 'uuid'
       
const Details = (props) => {
  const recipe = props.location.aboutProps;

  return (
    <>
    {recipe.name}
    <ul>Ingredients: 
         { recipe.ingredients.map( ingredient => (
           <li key={uuidv4()}>{ingredient.text}</li>
         ))}
       </ul>
       <p>{Math.round(recipe.calories)} calories</p>
       <img src={recipe.image} alt={recipe.name} className="imgRecipes" />

       <a href={recipe.sourceRecipe} target="_blank" rel="noopener noreferrer">
           Interested? Click this link and check the recipe from the original source.
       </a>
       <AddFavorite
        name = {recipe.name}
        calories = {recipe.calories}
        image = {recipe.image}
        ingredients = {recipe.ingredients}
        sourceRecipe = {recipe.sourceRecipe}/>
       
    </>
    
  );
}

export default Details;