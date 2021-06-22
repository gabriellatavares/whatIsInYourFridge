//O que falta fazer: 
//- Adicionar a opção de favoritar receita por localStorage (toda a lógica, add e deletar. não deixar repetir també )
//- página dos favoritos
//- footer

import AddFavorite from './AddFavorite'
import { v4 as uuidv4 } from 'uuid'
       
const Details = (props) => {
  console.log("about", props.location.aboutProps)
  const recipe = props.location.aboutProps;

  return (
    <>
    <ul>Ingredients: 
         { recipe.ingredients.map( ingredient => (
           <li key={uuidv4()}>{ingredient.text}</li>
         ))}
       </ul>
       <p>{Math.round(recipe.calories)} calories</p>
       <img src={recipe.image} alt={recipe.title} className="imgRecipes" />

       <a href={recipe.sourceRecipe} target="_blank" rel="noopener noreferrer">
           Interested? Click this link and check the recipe from the original source.
       </a>
       <AddFavorite
        name = {recipe.title}
        calories = {recipe.calories}
        image = {recipe.image}
        ingredients = {recipe.ingredients}
        sourceRecipe = {recipe.sourceRecipe}
     />
       
    </>
    
  );
}

export default Details;