import React from "react";
import STYLE from "./menu.module.css"

const MenuNet=()=>{
    return(
    <div id={STYLE.menuBlock}>
        <ul>
            <li> <a href="">Home</a></li>
            <li><a href="">Series</a></li>
            <li><a href="">Films</a></li>
            <li><a href="">Latest</a></li>
            <li><a href="">My List</a></li>
        </ul>
    </div>
    )
}

export default MenuNet