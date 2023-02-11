import React from 'react'
import ReactDOM from 'react-dom'
import './DeleteModal.css'
function DeleteModal(props) {
  
  return ReactDOM.createPortal (
    <div className={props.isShowModal ? 'modal-container active':'modal-container'}>
         
         <div className="Delete-Modal">
        <h1 className='Modal-Title'>ایا از حذف اطمینان دارید؟</h1>
        <div className="DeleteModal-btns-container">
        <button className='DeleteModal-btn' onClick={()=>props.deleteAction()}>بله</button>
        <button className='DeleteModal-btn cancel-modal' onClick={()=>props.cancelDeleteModal()}>خیر</button>
        </div>
      </div>
   
    </div>
    ,
    document.getElementById('modals')

  )
}

export default DeleteModal