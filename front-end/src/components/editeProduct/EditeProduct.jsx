import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './EditProduct.css'
function EditProduct({ setIsShowEditModal, isShowEditModal, targetProduct ,setFlag}) {

  let [targetProductTitle, setTargetProductTitle] = useState('')
  let [targetProductPrice, setTargetProductPrice] = useState('')
  let [targetProductCount, setTargetProductCount] = useState('')
  let [targetProductImg, setTargetProductImg] = useState('')
  let [targetProductPopularity, setTargetProductPopularity] = useState('')
  let [targetProductSale, setTargetProductSale] = useState('')
  let [targetProductColors, setTargetProductColors] = useState('')

  useEffect(() => {
    setTargetProductTitle(targetProduct.title)
    setTargetProductPrice(targetProduct.price)
    setTargetProductCount(targetProduct.count)
    setTargetProductImg(targetProduct.img)
    setTargetProductPopularity(targetProduct.popularity)
    setTargetProductSale(targetProduct.sale)
    setTargetProductColors(targetProduct.colors)
  }, [targetProduct])


  // make new object to send to backend
  let updatedProduct = {
    id:targetProduct.id,
    title: targetProductTitle,
    price: targetProductPrice,
    count: targetProductCount,
    img: targetProductImg,
    popularity: targetProductPopularity,
    sale: targetProductSale,
    colors: targetProductColors
  }
 


  // update function by click save 
  const updateProduct = () => {
    console.log(updatedProduct)
    fetch(`http://localhost:8000/api/products/${targetProduct.id}`, {
      method: 'PUT',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(updateProduct)
    })
      .then((res)=> {
        res.json()
      }).then(res=>{
        console.log(res)
        setIsShowEditModal(false)
        setFlag(prev=>!prev)
      })
      .catch(error=>console.log(error))
  }








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
      <div className="edit-product-container">
        <h1 className='edit-product-modal-title'>تغیرات محصول</h1>
        <input
          type="text"
          placeholder="نام محصول"
          className="edit-product-input"
          value={targetProductTitle}
          onChange={e=> setTargetProductTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="قیمت محصول"
          className="edit-product-input"
          value={targetProductPrice}
            onChange={e=>  setTargetProductPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="موجودی محصول"
          className="edit-product-input"
          value={targetProductCount}
    onChange={e=>    setTargetProductCount(e.target.value)}
        />
        <input
          type="text"
          placeholder="ادرس عکس محصول"
          className="edit-product-input"
          value={targetProductImg}
    onChange={e=>    setTargetProductImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="محبوبیت محصول"
          className="edit-product-input"
          value={targetProductPopularity}
    onChange={e=>    setTargetProductPopularity(e.target.value)}
        />
        <input
          type="text"
          placeholder="فروش محصول"
          className="edit-product-input"
          value={targetProductSale}
    onChange={e=>    setTargetProductSale(e.target.value)}
        />
        <input
          type="text"
          placeholder="رنگ بندی محصول"
          className="edit-product-input"
          value={targetProductColors}
    onChange={e=>    setTargetProductColors(e.target.value)}
        />
        <button className='edit-product-submit-btn' onClick={()=>updateProduct()}>
          save
        </button>
      </div>
    </div>
    , document.getElementById('modals')
  )
}

export default EditProduct