import React from 'react'
import AddProduct from '../../components/AddProduct/AddProduct'
import ErrorBox from '../../components/ErrorBox/ErrorBox'
import ProductTable from '../../components/ProductTable/ProductTable'

function Products() {
  return (
    <>
      <AddProduct/>
      <ErrorBox title={'محصولی'}/>
      <ProductTable/>
    </>
  )
}


export default Products