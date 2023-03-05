import React from "react";
import STYLE from "./menu3.module.css"
const Menu3=()=>{
    return(
        <div id={STYLE.menuBlock3}>
            <ul>
                <li><input type="text" placeholder="Search" /></li>
                <li><a href="">HOME</a></li>
                <li> <a href="">ABOUT</a> </li>
                <li> <a href="">LOGIN</a></li>
            </ul>
        </div>
    )
}
export default Menu3