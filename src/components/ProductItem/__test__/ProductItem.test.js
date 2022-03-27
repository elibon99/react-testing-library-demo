import {render, screen} from "@testing-library/react";
import ProductItem from "../ProductItem";
import {DummyProducts} from "../../ProductList/DummyProducts";

const ShoppingCart = DummyProducts.filter((product) => product.title === "Macbook")
const Macbook = ShoppingCart[0]

it('add button should have class disabled when product is in cart', async () => {
    render(
        <ProductItem
            product={Macbook}
            products={ShoppingCart}
            addProductToCart={() => {}}
        />
    )

    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toHaveClass("product-item-btn-disabled")
})