import {render, screen} from "@testing-library/react";
import ShoppingStatus from "../ShoppingStatus";
import {DummyProducts} from "../../ProductList/DummyProducts";

const ShoppingCart = DummyProducts.filter((product) => product.title === "Macbook")

describe('<ShoppingStatus/>', () => {

    /**
     * Checks that ShoppingStatus is correctly rendered
     */
    it('renders correctly', async () => {
        const {asFragment} = render(
            <ShoppingStatus
                products={ShoppingCart}
            />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    /**
     * Checks that ShoppingStatus renders the correct amount of items and
     * total price
     */
    it('should render the correct amount of items and total price', async () => {
        render(
            <ShoppingStatus
                products={ShoppingCart}
            />);
        const totalItemsElement = screen.getByText(/Total items: 1/i);
        const totalPriceElement = screen.getByText(/Total price: 16000/i);
        expect(totalItemsElement).toBeInTheDocument();
        expect(totalPriceElement).toBeInTheDocument();
    })
})

