import React, { useState } from "react";
import "./AddProduct.css";
import { Row, Col } from "react-bootstrap";
import ErrorBox from "../ErrorBox/ErrorBox";
import { BsCursorText } from "react-icons/bs";
import { BsBagPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { MdSell } from "react-icons/md";

export default function AddProduct() {
  let [productName, setProductName] = useState("");
  let [productPrise, setProductPrise] = useState("");
  let [productCount, setProductCount] = useState("");
  let [imgAddress, setImgAddress] = useState("");
  let [productFavorite, setProductFavorite] = useState("");
  let [ProductSell, setProductSell] = useState("");
  let [ProductColorize, setProductColorize] = useState("");
  
  let productObject = {
    id: 12,
    title: productName,
    price: productPrise,
    count: productCount,
    img: imgAddress,
    popularity: productFavorite,
    sale: ProductSell,
    colors: ProductColorize,
  };


  const addItem = () => {
    fetch("http://localhost:8000/api/products", {
      method: "POST",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productObject)
    })
      .then((res) =>res.json())
      .then((result) => console.log(result));
  };




  return (
    <div className="add-product">
      <h3 className="section-title">افزودن محصول جدید</h3>

      <div className="add-product-form">
        <div className="add-product-form-warp">
          <div className="add-product-form-group">
            <BsCursorText />{" "}
            <input
              type="text"
              placeholder="نام محصول"
              className="add-product-input"
              onInput={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="add-product-form-group">
            <MdAttachMoney />
            <input
              type="text"
              placeholder="قیمت محصول"
              className="add-product-input"
              onInput={(e) => setProductPrise(e.target.value)}
            />
          </div>

          <div className="add-product-form-group">
            <BsBagPlus />
            <input
              type="text"
              placeholder="موجودی محصول"
              className="add-product-input"
              onInput={(e) => setProductCount(e.target.value)}
            />
          </div>

          <div className="add-product-form-group">
            <AiFillPicture />
            <input
              type="text"
              placeholder="ادرس عکس محصول"
              className="add-product-input"
              onInput={(e) => setImgAddress(e.target.value)}
            />
          </div>

          <div className="add-product-form-group">
            <AiOutlineHeart />
            <input
              type="text"
              placeholder="محبوبیت محصول"
              className="add-product-input"
              onInput={(e) => setProductFavorite(e.target.value)}
            />
          </div>

          <div className="add-product-form-group">
            <MdSell />
            <input
              type="text"
              placeholder="فروش محصول"
              className="add-product-input"
              onInput={(e) => setProductSell(e.target.value)}
            />
          </div>

          <div className="add-product-form-group">
            <IoIosColorPalette />
            <input
              type="text"
              placeholder="رنگ بندی محصول"
              className="add-product-input"
              onInput={(e) => setProductColorize(e.target.value)}
            />
          </div>
        </div>
        <button className="Add-Product-submit" onClick={addItem}>
          ثبت محصول
        </button>
      </div>
    </div>
  );
}
