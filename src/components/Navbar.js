import React from 'react'
import { BiFridge } from 'react-icons/bi'
import { BsBookmarkPlus } from 'react-icons/bs'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header>
      <NavLink exact style={styles.icon} to={"/"} >
        <BiFridge />
      </NavLink>
      <NavLink exact style={styles.link} activeStyle={styles.active} to={"/favs"}>
        <BsBookmarkPlus /> <p> favorite recipes </p>  
      </NavLink>
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
    color: '#2f1808',
    textDecoration: 'none',
  },
  active: {
		color: '#F54748',
	}
}