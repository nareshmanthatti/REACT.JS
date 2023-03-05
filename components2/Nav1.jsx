import React from 'react'
import Menu1 from './Menu1';
import Logo1 from './Logo1';
import STYLE from "./nav.module.css"

const Nav1 = () => {
  return (
    <div id={STYLE.navBlock1}>
     <Menu1/>
    <Logo1/>
    </div>
    )
}

export default Nav1
