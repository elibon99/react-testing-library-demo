import React from 'react'
import CrossIcon from "../../assets/images/CrossIcon";
import "./ShoppingCartItem.css"

const ShoppingCartItem = ({product, removeProduct}) => {
    return (
        <div className="shopping-cart-item-container" data-testid={"shopping-cart-item"}>
            <h4 className="shopping-cart-item-title">{product.title}</h4>
            <div className="shopping-cart-item-remove" data-testid={"remove-product-button"} onClick={() => removeProduct(product.id)}>
                <CrossIcon/>
            </div>
            <h4 className="shopping-cart-item-price">{`${product.price} SEK`}</h4>
        </div>
    )
}

export default ShoppingCartItem