import React from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './DeleteCommnetModal.css'
function DeleteCommentModal({ isShowDeleteModal, setIsShowDeleteModal ,deleteComment}) {
    useEffect(()=>{
        window.addEventListener('keydown',(e)=>{
            if(e.keyCode==27){
                setIsShowDeleteModal(false)
            }
        })
    },[])
    return ReactDOM.createPortal(
        <div className={isShowDeleteModal ? 'modal-container active' : 'modal-container'}>
            <div className="delete-comment-container">
                <h1>ایا از حذف این کامنت اطمینان دارید؟</h1>
                <div className="delete-cancel-btns">
                    <button className='yes-btn' onClick={()=>deleteComment()}>بله</button>
                    <button className='no-btn' onClick={()=>{setIsShowDeleteModal(false)}} >خیر</button>
                </div>
            </div>
        </div>
        , document.getElementById('modals')
    )
}

export default DeleteCommentModal