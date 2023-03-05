import React from 'react'
import STYLE from "./menu.module.css"
const Menu1 = () => {
  return (
    <div id={STYLE.menuBlock1}>
    <ul>
        <li><input type="search" placeholder='Search'/></li>
        <li><a href=""><button>Contact</button></a></li>
        <li><a href="">Projects</a> </li>
        <li><a href="">More</a></li>
        <li><a href="">About</a></li>
    </ul>
</div>
  )
}

export default Menu1