import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './EditProduct.css'
function EditProduct({ setIsShowEditModal, isShowEditModal, targetProduct ,setFlag,children}) {







  // make new object to send to backend

 


  // update function by click save 








  // close the modal
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode == 27) {
        setIsShowEditModal(false)
      }
    })
  }, [])
  //




  return ReactDOM.createPortal(
    <div className={isShowEditModal ? 'modal-container active' : 'modal-container'}>
      {children}
    </div>
    , document.getElementById('modals')
  )
}

export default EditProduct