import React from 'react'
import { useEffect } from 'react'
import  ReactDOM  from 'react-dom'
import './ShowCommentInfo.css'
function ShowCommentInfo({isShowCommentInfo,setIsShowCommentInfo,desc}) {
  useEffect(()=>{
      window.addEventListener('keydown',(e)=>{
       if(e.keyCode==27){
        setIsShowCommentInfo(false)
       }
      }) 
  },[])
  return ReactDOM.createPortal (
   <>
    <div className={isShowCommentInfo?'modal-container active' :'modal-container'}>
        <div className="showCommentInfo-container">
            {desc}
        </div>
    </div>
   </>
   ,document.querySelector('.modals-container')
  )
}

export default ShowCommentInfo