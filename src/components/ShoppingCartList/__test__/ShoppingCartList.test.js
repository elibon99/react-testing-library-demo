import {render, screen} from "@testing-library/react";
import ShoppingCartList from "../ShoppingCartList";
import {DummyProducts} from "../../ProductList/DummyProducts";

const ShoppingCart = DummyProducts.filter((product) => product.title === "Macbook")

describe('<ShoppingCartList />', () => {

    /**
     * Checks that ShoppingCartList is rendered correctly by comparing with snapshot
     */
    it('renders correctly', async () => {
        const {asFragment} = render(
            <ShoppingCartList
                products={ShoppingCart}
                setProducts={() => {}}
            />
        )
        expect(asFragment()).toMatchSnapshot()
    })
})