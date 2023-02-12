import React, { useEffect, useState } from "react";
import "./ProductTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../detailModal/DetailsModal";
import EditProduct from "../editeProduct/EditeProduct";

function ProductTable({setFlag, flag}) {
  let [Products,setProducts]  = useState([]);
  let [itemflag,setItemFlag] = useState(false)
  let [getProductObject,setGetProductObject] = useState({})
console.log(getProductObject);
  const getDataFromDataBase=()=>{
    fetch('http://localhost:8000/api/products')
    .then((res) => res.json())
    .then(res => {
      setProducts(res)

    })
  }

  
  useEffect(()=>{
    getDataFromDataBase()

  },[])


  useEffect(()=>{
    getDataFromDataBase()
  },[flag])

  
  
  // show delete modal
  // {
  let [isShowModal, setIsShowModal] = useState(false);

  // delete product-id
  let [productID, setProductID] = useState(0);
  console.log(productID);

  // pass functions in DeleteModal component
  const deleteAction = () => {
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((response) => response)
      .then((data) => {
        setIsShowModal(false);
        console.log(data);
         getDataFromDataBase()

      }); // Manipulate the data retrieved back, if we want to do something with it
  };

  const cancelDeleteModal = () => {
    setIsShowModal(false);
  };
  // }

  // show Details Modal {
  let [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  // }

  // show edit modal {
  let [isShowEditModal, setIsShowEditModal] = useState(false);
  // }

  // fetch from the api

  return (
    <>
      {
        Products.length ?
          ''
        :
        <ErrorBox title={'محصولی'}/>
      }
      <table className="product-table">
        <tr className="table-product-title-tr">
          <th>عنوان</th>
          <th>نام</th>
          <th>قیمت</th>
          <th>موجودی</th>
        </tr>

        {Products &&
          Products.map((product) => (
            <tr className="product-row">
              <td>
                <img className="table-item-img" src={product.img} alt="" />
              </td>
              <td>{product.title}</td>
              <td>{product.price}$</td>
              <td>{product.count}</td>
              <td className="Table-action-btns-warper">
                <button
                  className="table-action-btns"
                  onClick={() =>{ 
                    setGetProductObject(product)
                    setIsShowDetailsModal(!isShowDetailsModal)
                  }}
                >
                  جزییات
                </button>
                <button
                  className="table-action-btns"
                  onClick={() => {
                    // find target id
                    setProductID(product.id);
                    //open modal
                    setIsShowModal(!isShowModal);
                  }}
                >
                  حذف
                </button>
                <button
                  className="table-action-btns"
                  onClick={() => {
                    setIsShowEditModal(!isShowEditModal)
                  }}
                >
                  ویرایش
                </button>
              </td>
            </tr>
          ))}
      </table>

      <DeleteModal
        isShowModal={isShowModal}
        cancelDeleteModal={cancelDeleteModal}
        deleteAction={deleteAction}
      />

      <DetailsModal
        isShowDetails={isShowDetailsModal}
        setIsShowDetailsModal={setIsShowDetailsModal}
        targetProduct={getProductObject}
      />

      <EditProduct
        isShowEditModal={isShowEditModal}
        setIsShowEditModal={setIsShowEditModal}
      />
    </>
  );
}

export default ProductTable;
