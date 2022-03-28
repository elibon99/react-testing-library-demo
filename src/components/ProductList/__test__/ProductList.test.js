import {render, screen} from "@testing-library/react";
import ProductList from "../ProductList";
import {DummyProducts} from "../DummyProducts";

const ShoppingCart = DummyProducts.filter((product) => product.title === "Macbook")

describe('<ProductList/>', () => {

    /**
     * Checks that ProductList is rendered correctly by comparing with snapshot
     */
    it('renders correctly', async () => {
        const {asFragment} = render(
            <ProductList
                products={ShoppingCart}
                setProducts={() => {}}
            />
        )
        expect(asFragment()).toMatchSnapshot()
    })
})