import React from 'react'
import "./ShoppingStatus.css"

const ShoppingStatus = ({products}) => {
    const calculatePrice = () => {
        let price = 0
        for (let product of products) {
            price += product.price
        }
        return price
    }

    return (
        <div className="shopping-status-container">
            <h3 className="shopping-status-title">Total items: {products.length}</h3>
            <h3 className="shopping-status-title">Total price: {calculatePrice()}</h3>
        </div>
    )
}

export default ShoppingStatus
