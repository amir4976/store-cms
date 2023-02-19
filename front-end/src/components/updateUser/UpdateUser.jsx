import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./updateUser.css";
function UpdateUser({children,isShowUpdateUser , setIsShowUpdateUser}) {

    useEffect(()=>{
        window.addEventListener('keydown',(e)=>{
            if(e.keyCode == 27) {
                setIsShowUpdateUser(false)
            }
        } )
    },[])

     return ReactDOM.createPortal(
    <div className={isShowUpdateUser?"modal-container active":'modal-container'}>
        {children}
    </div>,
    document.getElementById("modals")
  );
}

export default UpdateUser;



