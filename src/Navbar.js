import React from 'react'
import { BiFridge } from 'react-icons/bi'
import { BsBookmarkPlus } from 'react-icons/bs'

const Navbar = () => {
  return (
 <header>
   <div style={styles.icon}><BiFridge /></div>
   <div style={styles.link}><BsBookmarkPlus /> <a> favorite recipes </a> </div>
 </header>
  )
}


export default Navbar;
const styles = {
  icon: {
    color: '#F54748',
    fontSize: '50px',
    paddingTop: '2%',
  },
  link: {
    fontSize: '15px',
    fontWeight: 'bold', 
    display: 'flex',
    alignItems: 'center',

  }
}