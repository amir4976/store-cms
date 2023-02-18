import React from 'react'
import './userDeleteModal.css'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
function UserDeleteModal({isShowDeleteUserModal,setIsShowDeleteUserModal,deleteUser}) {


  return ReactDOM.createPortal(
    <div className={isShowDeleteUserModal? 'modal-container active':'modal-container'}>
        <div className="deleteUserModal-container">
            <h1>ایا از حذف این یوزر اطمینان دارید؟</h1>
            <div className="delete-cancel-btns">
                    <button className='yes-btn' onClick={()=>deleteUser()} >بله</button>
                    <button className='no-btn' onClick={()=>setIsShowDeleteUserModal(false)} >خیر</button>
                </div>
        </div>
    </div>

    ,document.getElementById('modals')
  )
}

export default UserDeleteModal