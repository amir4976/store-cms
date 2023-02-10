import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './EditProduct.css'
function EditProduct({setIsShowEditModal,isShowEditModal}) {
  useEffect(()=>{
    window.addEventListener('keydown',(e)=>{
      if(e.keyCode == 27){
        setIsShowEditModal(false)
      }
    })
  },[])
  return ReactDOM.createPortal(
    <div className={isShowEditModal?'modal-container active':'modal-container'}>
      <div className="edit-product-container">
        <h1 className='edit-product-modal-title'>تغیرات محصول</h1>
        <button className='edit-product-submit-btn'>
          save
        </button>
      </div>
    </div>
    ,document.getElementById('modals')
  )
}

export default EditProduct