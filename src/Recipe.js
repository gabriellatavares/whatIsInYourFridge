import React from 'react'; 
import { BsClockHistory } from 'react-icons/bs'


const Recipe = ({title, calories, image, ingredients, sourceRecipe, totalTime}) => {
  
  let minutes = `${totalTime} minutes`
  const quickie = `quick recipe`
  return (
    <div className="itemRecipe">
      <img src={image} alt={title} className="imgRecipes" />
      <h4>{title}</h4>
      <p><span style={styles.align}><BsClockHistory /> </span>{totalTime === 0 ? quickie : minutes}</p>
      
    </div>
  )
}
export default Recipe;
const styles = {

  align: {
    fontSize: '1.5vh',

  }
}