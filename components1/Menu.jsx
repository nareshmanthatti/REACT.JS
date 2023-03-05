import React from 'react'
import STYLE from "./Menu.module.css"

const Menu = () => {
  return (
    <div id={STYLE.menuBlock}>
        <ul>
            <li><input type="search" placeholder='Search for products'/></li>
            <li><a href=""><button>LOGIN</button></a></li>
            <li><a href="">Become a seller</a> </li>
            <li><a href="">More</a></li>
            <li><a href="">Cart</a></li>
        </ul>
    </div>
  )
}

export default Menu