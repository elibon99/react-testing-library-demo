import {render, screen} from "@testing-library/react";
import ShoppingStatus from "../ShoppingStatus";
import {DummyProducts} from "../../ProductList/DummyProducts";

it('should render the correct amount of items and total price', async () => {
    render(<ShoppingStatus products={DummyProducts.filter((product) => product.title === "Macbook")}/>);
    const totalItemsElement = screen.getByText(/Total items: 1/i);
    const totalPriceElement = screen.getByText(/Total price: 16000/i);
    expect(totalItemsElement).toBeInTheDocument();
    expect(totalPriceElement).toBeInTheDocument();
})
