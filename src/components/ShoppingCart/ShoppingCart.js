import React, {useState} from 'react'
import "./ShoppingCart.css"
import ProductList from "../ProductList/ProductList";
import ShoppingCartList from "../ShoppingCartList/ShoppingCartList";

const ShoppingCart = () => {
    const [products, setProducts] = useState([])
    return(
        <div className="shopping-cart">
            <ProductList products={products} setProducts={setProducts}/>
            <ShoppingCartList products={products} setProducts={setProducts}/>
        </div>
    )
}

export default ShoppingCart