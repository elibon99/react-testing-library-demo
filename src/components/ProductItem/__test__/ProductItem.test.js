import {render, screen} from "@testing-library/react";
import ProductItem from "../ProductItem";
import {DummyProducts} from "../../ProductList/DummyProducts";

const ShoppingCart = DummyProducts.filter((product) => product.title === "Macbook")
const Macbook = ShoppingCart[0]

describe('<ProductItem/>', () => {

    /**
     * Checks that ProductItem is rendered correctly by comparing with snapshot
     */
    it('renders correctly', async () => {
        const {asFragment} = render(
            <ProductItem
                product={Macbook}
                products={ShoppingCart}
                addProductToCart={() => {}}
            />
            )
        expect(asFragment()).toMatchSnapshot()
    })

    /**
     * When product is in cart, add button should be disabled
     */
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
})
