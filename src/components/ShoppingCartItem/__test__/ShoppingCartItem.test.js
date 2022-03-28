import {render, screen} from "@testing-library/react";
import ShoppingCartItem from "../ShoppingCartItem";
import {DummyProducts} from "../../ProductList/DummyProducts";

const ShoppingCart = DummyProducts.filter((product) => product.title === "Macbook")
const Macbook = ShoppingCart[0]

describe('<ShoppingCartItem />', () => {

    /**
     * Checks that ShoppingCartItem is rendered correctly by comparing with snapshot
     */
    it('renders correctly', async () => {
        const {asFragment} = render(
            <ShoppingCartItem
                product={Macbook}
                removeProduct={() => {}}
            />
        )
        expect(asFragment()).toMatchSnapshot()
    })
})