import React,{useState} from "react";
import "./ProductTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
function ProductTable() {
  let [isShowModal , setIsShowModal] = useState(false)
  const deleteAction = () =>{
    setIsShowModal(false)
  }
  const cancelDeleteModal= () =>{
    setIsShowModal(false)
  } 
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
          <button className="table-action-btns">جزییات</button>
          <button className="table-action-btns" onClick={()=>setIsShowModal(!isShowModal)} >حذف</button>
          <button className="table-action-btns">ویرایش</button>
        </td>
      </tr>
    </table>
     
     <DeleteModal isShowModal={isShowModal}  cancelDeleteModal ={cancelDeleteModal}  deleteAction={deleteAction} />
    </>
  );
}

export default ProductTable;
