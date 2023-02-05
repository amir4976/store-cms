import React from "react";
import "./navbar.css";
import {CiLight} from 'react-icons/ci'
import {AiOutlineBell} from 'react-icons/ai'
import { Theme } from "../../context/Theme";
import { useContext } from "react";
function Navbar() {
  let [isDark,ToggleTheme] = useContext(Theme)
  
  return (
    <div className="Navbar">
      <div className="navbar-profile">
        <img src="https://irs01.wisgoon.com/irs01/4e/9c/af/30/irs01_s3old_1535831778792209.jpg" alt="" />
        <div className="Profile-Infos">
          <span>نام </span>
          <span>شغل</span>
        </div>
      </div>

      <div className="btns-and-searchBox">
        <div className="search-place">
          <input type="text" placeholder="جستو جو" />
          <button className="SearchBtn">جستوجو</button>
        </div>

        <button className="miniNavbar-btns" onClick={()=>{
          ToggleTheme()
        }}><CiLight/></button>
        <button className="miniNavbar-btns"><AiOutlineBell/>  </button>
      </div>

    </div>
  );
}

export default Navbar;

