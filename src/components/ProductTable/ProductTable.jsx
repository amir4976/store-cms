import React, { useEffect, useState } from "react";
import "./ProductTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";

import DetailsModal from "../detailModal/DetailsModal";
import EditProduct from "../editeProduct/EditeProduct";

function ProductTable() {


  // show delete modal 
  // {
  let [isShowModal, setIsShowModal] = useState(false)

  // pass functions in DeleteModal component
  const deleteAction = () => {
    setIsShowModal(false)
  }
  const cancelDeleteModal = () => {
    setIsShowModal(false)
  }
  // }






  // show Details Modal {
  let[ isShowDetailsModal , setIsShowDetailsModal] = useState(false)
  // }


  // show edit modal {
  let [isShowEditModal,setIsShowEditModal] = useState(false)
  // }




  return (
    <>
      <table className="product-table">
        <tr className="table-product-title-tr">
          <th>عنوان</th>
          <th>نام</th>
          <th>قیمت</th>
          <th>موجودی</th>
        </tr>

        <tr className="product-row">
          <td>
            <img className="table-item-img" src="./logo192.png" alt="" />
          </td>
          <td>lorem</td>
          <td>1200$</td>
          <td>150</td>
          <td className="Table-action-btns-warper">
            <button className="table-action-btns" onClick={() => setIsShowDetailsModal(!isShowDetailsModal)}>جزییات</button>
            <button className="table-action-btns" onClick={() => setIsShowModal(!isShowModal)} >حذف</button>
            <button className="table-action-btns" onClick={()=>setIsShowEditModal(!isShowEditModal)}>ویرایش</button>
          </td>
        </tr>
      </table>

      <DeleteModal isShowModal={isShowModal} cancelDeleteModal={cancelDeleteModal} deleteAction={deleteAction} />

      <DetailsModal isShowDetails={isShowDetailsModal} setIsShowDetailsModal = {setIsShowDetailsModal}  />

      <EditProduct isShowEditModal={isShowEditModal} setIsShowEditModal={setIsShowEditModal} />
    </>
  );
}

export default ProductTable;
