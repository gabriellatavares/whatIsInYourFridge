import React from 'react'; 


const Recipe = ({title, calories, image, ingredients, sourceRecipe, totalTime}) => {
  
  let minutes = `${totalTime} minutes`
  return (
    <div className="itemRecipe">
  
      <img src={image} alt={title} className="imgRecipes" />
      <h4>{title}</h4>
      <p>{totalTime === 0 ? 'quick recipe' : minutes}</p>
      
    </div>
  )
}
export default Recipe;