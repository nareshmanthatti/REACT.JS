import React from "react";
import STYLE from "./netflix.module.css"
import MenuNet from './Menu';
import SearchNet from './Search';
import LogoNet from './Logo';


const Navbar=()=>{
    return(
        <div id={STYLE.navBlock}>
           <LogoNet/>
            <MenuNet/>
            <SearchNet/>
        </div>
    )
}
export default Navbar