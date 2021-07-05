import React from 'react'; 
import { BsClockHistory } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'



const Recipe = ({title, calories, image, ingredients, sourceRecipe, totalTime}) => {
  
  let minutes = `${totalTime} minutes`
  const quickie = `quick recipe`
  return (
    <div className="itemRecipe">
      <NavLink 
        exact style={styles.link} 
        activeStyle={styles.link} 
        to ={{
          pathname: '/details', 
          aboutProps: {
            name: title,
            calories: calories,
            image: image,
            ingredients: ingredients,
            sourceRecipe: sourceRecipe,
            } 
            }}>
      <img src={image} alt={title} className="imgRecipes" />
      <h4>{title}</h4>   
      <p><span style={styles.align}><BsClockHistory /> </span>{totalTime === 0 ? quickie : minutes}</p>
      </NavLink>
    </div>
  )
}
export default Recipe;
const styles = {
  align: {
    fontSize: '1.5vh',
  },
  link: {
    textDecoration: 'none',
    color: '#707070'
  }
}