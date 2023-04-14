import React from 'react'
import './Product.scss'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>*</p>
                </div>
            </div>
            <div style={{width:'100%'}}>
                <img src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' alt="" />
            </div>


            <button>Add to Basket</button>
        </div>
    )
}

export default Product