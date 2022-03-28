import {render, screen, fireEvent} from "@testing-library/react";
import ShoppingCart from "../ShoppingCart";
import {within} from "@testing-library/dom";

/**
 * This function identifies the add button for the products defined in
 * the list of products and clicks on it.
 * @param products an array of product names
 */
const addProductToShoppingCart = (products) => {
    const ProductList = within(screen.getByTestId("product-list"))
    products.forEach((product) => {
        const ProductItem = within(ProductList.getByText(product).parentElement)
        fireEvent.click(ProductItem.getByRole("button", {name: "Add to cart"}))
    })
}

/**
 * This method tries to identifies the remove button for the products in the shopping cart
 * defined by the list of products and clicks on it.
 * @param products an array of product names
 */
const removeProductFromShoppingCart = (products) => {
    const ShoppingCartList = within(screen.getByTestId("shopping-cart-list"))
    products.forEach((product) => {
        const ShoppingCartItem = within(ShoppingCartList.getByText(product).parentElement)
        fireEvent.click(ShoppingCartItem.getByTestId("remove-product-button"))
    })
}

describe('<ShoppingCart />', () => {
    /**
     * When adding one product to the shopping cart we would expect it
     * to appear in the list of shopping cart items.
     */
    it("adds one product to shopping cart", async () => {
        render(<ShoppingCart/>);
        addProductToShoppingCart(["Macbook"])

        // Expect 1 product in shopping cart
        const ShoppingCartItems = screen.getAllByTestId("shopping-cart-item")
        expect(ShoppingCartItems.length).toBe(1)
    })

    /**
     * When remove one product from the shopping cart we would expect it
     * to disappear from the list of shopping cart items.
     */
    it("removes one product from shopping cart", async () => {
        render(<ShoppingCart/>);
        addProductToShoppingCart(["Macbook"])
        removeProductFromShoppingCart(["Macbook"])

        // Expect 0 products in shopping cart
        const ShoppingCartItems = screen.queryAllByTestId("shopping-cart-item")
        expect(ShoppingCartItems.length).toBe(0)
    })

})
