import React,{useState,useEffect} from 'react'
import AddProduct from '../../components/AddProduct/AddProduct'
import ProductTable from '../../components/ProductTable/ProductTable'



function Products() {

    let [flag ,setFlag] =useState(false)

  return (
    <>
      <AddProduct flag={flag} setFlag ={setFlag}/>
     
      <ProductTable flag={flag} setFlag ={setFlag}/>
      {/* <DeleteModal/> */}
    </>
  )
}


export default Products