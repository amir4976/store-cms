import React, { useEffect, useState } from "react";
import "./ProductTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../detailModal/DetailsModal";
import EditProduct from "../editeProduct/EditeProduct";

function ProductTable({ setFlag, flag }) {
  let [Products, setProducts] = useState([]);
  let [itemflag, setItemFlag] = useState(false);
  let [getProductObject, setGetProductObject] = useState({});

  let [targetProductTitle, setTargetProductTitle] = useState("");
  let [targetProductPrice, setTargetProductPrice] = useState("");
  let [targetProductCount, setTargetProductCount] = useState("");
  let [targetProductImg, setTargetProductImg] = useState("");
  let [targetProductPopularity, setTargetProductPopularity] = useState("");
  let [targetProductSale, setTargetProductSale] = useState("");
  let [targetProductColors, setTargetProductColors] = useState("");

  const getDataFromDataBase = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  };

  useEffect(() => {
    getDataFromDataBase();
  }, []);

  useEffect(() => {
    getDataFromDataBase();
  }, [flag]);

  // show delete modal
  // {
  let [isShowModal, setIsShowModal] = useState(false);

  // delete product-id
  let [productID, setProductID] = useState(0);

  // pass functions in DeleteModal component
  const deleteAction = () => {
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((response) => response)
      .then((data) => {
        setIsShowModal(false);

        getDataFromDataBase();
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

  let updatedProduct = {
    title: targetProductTitle,
    price: targetProductPrice,
    count: targetProductCount,
    img: targetProductImg,
    popularity: targetProductPopularity,
    sale: targetProductSale,
    colors: targetProductColors,
  };

  // update comment
  const updateProduct = () => {
    console.log(updatedProduct);
    fetch(`http://localhost:8000/api/products/${getProductObject.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((res) => {
        console.log(res);
        setIsShowEditModal(false);
        getDataFromDataBase();
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <>
      {Products.length ? "" : <ErrorBox title={"محصولی"} />}
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
                  onClick={() => {
                    setGetProductObject(product);
                    setIsShowDetailsModal(!isShowDetailsModal);
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
                    setIsShowEditModal(!isShowEditModal);
                    setGetProductObject(product);
                    setTargetProductTitle(product.title);
                    setTargetProductPrice(product.price);
                    setTargetProductCount(product.count);
                    setTargetProductImg(product.img);
                    setTargetProductPopularity(product.popularity);
                    setTargetProductSale(product.sale);
                    setTargetProductColors(product.colors);
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
        targetProduct={getProductObject}
        setFlag={setFlag}
      >
        <div className="edit-product-container">
          <h1 className="edit-product-modal-title">تغیرات محصول</h1>
          <input
            type="text"
            placeholder="نام محصول"
            className="edit-product-input"
            value={targetProductTitle}
            onChange={(e) => setTargetProductTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="قیمت محصول"
            className="edit-product-input"
            value={targetProductPrice}
            onChange={(e) => setTargetProductPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="موجودی محصول"
            className="edit-product-input"
            value={targetProductCount}
            onChange={(e) => setTargetProductCount(e.target.value)}
          />
          <input
            type="text"
            placeholder="ادرس عکس محصول"
            className="edit-product-input"
            value={targetProductImg}
            onChange={(e) => setTargetProductImg(e.target.value)}
          />
          <input
            type="text"
            placeholder="محبوبیت محصول"
            className="edit-product-input"
            value={targetProductPopularity}
            onChange={(e) => setTargetProductPopularity(e.target.value)}
          />
          <input
            type="text"
            placeholder="فروش محصول"
            className="edit-product-input"
            value={targetProductSale}
            onChange={(e) => setTargetProductSale(e.target.value)}
          />
          <input
            type="text"
            placeholder="رنگ بندی محصول"
            className="edit-product-input"
            value={targetProductColors}
            onChange={(e) => setTargetProductColors(e.target.value)}
          />
          <button className="edit-product-submit-btn" onClick={updateProduct}>
            save
          </button>
        </div>
      </EditProduct>
    </>
  );
}

export default ProductTable;
