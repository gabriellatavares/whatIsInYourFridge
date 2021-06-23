import React, { useEffect, useState } from 'react'

const AddFavorite = (props) => {
  const [favorite, setFav] = useState(JSON.parse(localStorage.getItem('favorite') || '[]' ))

  useEffect(() => {
    const data = localStorage.getItem("favs");
    if (data) {
      setFav(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favorite))
  })
  return (
    <div>
      <button onClick={() => {
        let inThere = false;
        for(var ele of favorite){
          if (ele.name === props.name){
            inThere = true;
            alert('Recipe is already in the favorites tab!')
          }
        }
        if (inThere === false){
          setFav ([
            {
              name: props.name,
              calories: props.calories,
              image: props.image,
              ingredients: props.ingredients,
              sourceRecipe: props.sourceRecipe,
            },
            ...favorite
          ])
        }
        
      }}>
        Add to favorites!
      </button>
    </div>
  )
}

export default AddFavorite