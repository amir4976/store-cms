import React from 'react'
import './AddProduct.css'
import { Row, Col } from 'react-bootstrap'
import ErrorBox from '../ErrorBox/ErrorBox'
import { BsCursorText, } from 'react-icons/bs'
import { BsBagPlus, } from 'react-icons/bs'
import { AiOutlineHeart, } from 'react-icons/ai'
import { IoIosColorPalette, } from 'react-icons/io'
import { MdAttachMoney } from 'react-icons/md'
import { AiFillPicture } from 'react-icons/ai'
import { MdSell } from 'react-icons/md'


export default function AddProduct() {
    return (

        <div className="add-product">
            <h3 className='section-title'>افزودن محصول جدید</h3>

            <div className="add-product-form">
                <div className="add-product-form-warp">
                    <div className="add-product-form-group">
                        <BsCursorText />   <input type="text" placeholder='نام محصول' className='add-product-input' />
                    </div>



                    <div className="add-product-form-group">
                        <MdAttachMoney />
                        <input type="text" placeholder='قیمت محصول' className='add-product-input' />
                    </div>




                    <div className="add-product-form-group">
                        <BsBagPlus />
                        <input type="text" placeholder='موجودی محصول' className='add-product-input' />
                    </div>




                    <div className="add-product-form-group">
                        <AiFillPicture />
                        <input type="text" placeholder='ادرس عکس محصول' className='add-product-input' />
                    </div>



                    <div className="add-product-form-group">
                        <AiOutlineHeart />
                        <input type="text" placeholder='محبوبیت محصول' className='add-product-input' />
                    </div>



                    <div className="add-product-form-group">
                        <MdSell />
                        <input type="text" placeholder='فروش محصول' className='add-product-input' />
                    </div>



                    <div className="add-product-form-group">
                        <IoIosColorPalette />
                        <input type="text" placeholder='رنگ بندی محصول' className='add-product-input' />
                    </div>




                </div>
                <button className='Add-Product-submit'>ثبت محصول</button>
            </div>
        </div>

    )
}
