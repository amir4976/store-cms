import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./DetailModal.css";
function DetailsModal({ isShowDetails, setIsShowDetailsModal,targetProduct }) {

  // close details modal with ESP btn {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        setIsShowDetailsModal(false);
      }
    });
  }, []);
  // }
  

  
  return ReactDOM.createPortal(
    <div
      className={isShowDetails ? "modal-container active" : "modal-container"}
    >
      <div className="detail-modal-warper">
        <h1 className="modal-title"> جزییات محصول</h1>
        <div className="details-modal-container">
          <table className="details-table">
            <tr className="table-details-title-tr">
              <th>نام</th>
              <th>قیمت</th>
              <th>موجودی</th>
              <th>فروش</th>
              <th>محبوبیت</th>
              <th>رنگ</th>
            </tr>
            <tr className="product-detail">
              <td>{targetProduct.title}</td>
              <td>{targetProduct.price}$</td>
              <td>{targetProduct.count}</td>
              <td>{targetProduct.sale}</td>
              <td>{targetProduct.popularity}</td>
              <td>{targetProduct.colors}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>,
    document.getElementById("modals")
  );
}

export default DetailsModal;
