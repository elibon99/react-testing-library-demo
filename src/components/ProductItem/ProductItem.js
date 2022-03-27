import React from 'react'
import "./ProductItem.css"

const ProductItem = ({product, products, addProductToCart}) => {
    const isProductInShoppingCart = products.find((pr) => pr.id === product.id)
    return (
        <div className="product-item-container" id={"product-item"}>
            <img className="product-item-image" src={product.image} alt={"product"}/>
            <h4 className="product-item-title">{product.title}</h4>
            <h4 className="product-item-price">{`${product.price} SEK`}</h4>
            <button
                title={product.title}
                onClick={() => !isProductInShoppingCart && addProductToCart(product.id)}
                className={`product-item-btn ${isProductInShoppingCart && "product-item-btn-disabled"}`}
            >
                Add to cart
            </button>
        </div>
    )
}

export default ProductItem