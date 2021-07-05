import React, { useState } from 'react'
import Empty from './Empty'

const Favorites = () => {
  const [fav, setFav] =  useState(JSON.parse(localStorage.getItem('favs') || []))
  let clearFav = () => {
   localStorage.setItem('favs', JSON.stringify([]))
    window.location = '/favs'
}

  let deleteRecipe = (index) => {
    setFav(fav.filter((_, i) => i !== index))
    let deleting = []
    deleting = JSON.parse(localStorage.getItem('favs'))
    deleting.splice(index, 1)
    localStorage.setItem('favs', JSON.stringify(deleting))
    window.location.reload();
  }
  
  if (fav.length === 0){
    return (
      <Empty />
    )
  } else {
    return (
    <div>
      <h1>Favorite recipes</h1>
      <div>
        {fav.map ((item, i) => (
            <div key={i}>
              <h3>{item.name}</h3>
              <button onClick={()=> {
                deleteRecipe(i)
              }}>Deleteeeee    
              </button>

            </div>

        ))}
      </div>
      <div><button onClick={() => { clearFav() }}>Clear cart!</button></div> 
    </div>
    )
  }

}

export default Favorites;