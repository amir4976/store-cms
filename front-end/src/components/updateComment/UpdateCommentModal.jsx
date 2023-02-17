import React from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './updateCommnetModal.css'
function UpdateCommentModal(props) {
    useEffect(()=>{
        window.addEventListener('keydown',(e)=>{
            if(e.keyCode == 27){
                props.setIsShowUpdateModal(false)
            }
        })
    },[])
    return ReactDOM.createPortal(
        <div className={props.isShowUpdateModal ?' modal-container active': 'modal-container'}>
            <div className="update-CommentModal">
                <h1>  لطفا متن خود را وارد کنید!</h1>
                <textarea name="" id="" cols="40" rows="2"></textarea>
                <button className='updateBtn'>update</button>
            </div>
        </div>
        , document.getElementById('modals')
    )
}

export default UpdateCommentModal