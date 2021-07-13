import React from 'react'

function Empty(){
  return (
    <div style={styles.padding}>
      <h2>You don't have any favorite recipes yet!</h2>
    </div>
  )
}

export default Empty;

const styles = {
  padding: {
    padding: '20%',
    textAlign: 'center', 
  }
}