import React from 'react'
import "./ProductList.css"
import {DummyProducts} from "./DummyProducts";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({products, setProducts}) => {
    const addProductToCart = (id) => {
        let product = DummyProducts.find((product) => product.id === id)
        setProducts(prev => [...prev, product])
    }

    return (
        <div className="product-list-container">
            <h3 className="product-list-header">Products</h3>
            <div className="product-list" data-testid={"product-list"}>
                {DummyProducts.map((product, index) => {
                    return(
                        <ProductItem key={index} product={product} products={products} addProductToCart={addProductToCart}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList