import React from 'react'
import './Product.scss'

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (

                        <p>*</p>
                    ))}
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <img src={image} alt="" />
            </div>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product