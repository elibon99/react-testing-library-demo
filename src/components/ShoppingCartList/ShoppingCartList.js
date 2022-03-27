import React from 'react'
import "./ShoppingCartList.css"
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import ShoppingStatus from "../ShoppingStatus/ShoppingStatus";

const ShoppingCartList = ({products, setProducts}) => {
    const removeProduct = (id) => {
        let updatedProducts = products.filter((product) => product.id !== id)
        setProducts(updatedProducts)
    }

    return (
        <div className="shopping-cart-list-container">
            <h3 className="shopping-cart-list-header">Cart Items</h3>
            <div className="shopping-cart-list-inner-container" data-testid={"shopping-cart-list"}>
                {products && products.map((product, index) => {
                    return(
                        <ShoppingCartItem product={product} removeProduct={removeProduct} key={index}/>
                    )
                })}
            </div>
            <ShoppingStatus products={products}/>
        </div>
    )
}

export default ShoppingCartList
