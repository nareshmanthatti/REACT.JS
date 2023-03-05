import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import STYLE from "./nav.module.css"

const Nav = () => {
  return (
    <div id={STYLE.navBlock}>
        <Logo/>
        <Menu/>
    </div>
  )
}

export default Nav