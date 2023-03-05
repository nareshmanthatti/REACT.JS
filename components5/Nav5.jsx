import React from 'react'
import STYLE from "./nav5.module.css"
import Menu5 from './Menu5';
import Logo5 from './Logo5';

const Nav5 = () => {
  return (
    <div id={STYLE.navBlock5}>
        <Menu5/>
        <Logo5/>
    </div>
  )
}

export default Nav5