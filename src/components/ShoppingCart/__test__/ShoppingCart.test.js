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

describe("ShoppingCart", () => {

    /**
     * When adding one product to the shopping cart we would expect it
     * to appear in the list of shopping cart items.
     */
    it("adds one product to shopping cart", async () => {
        render(<ShoppingCart/>);
        addProductToShoppingCart(["Macbook"])

        // Expect 1 product in shopping cart
        const ShoppingCartItem = screen.getAllByTestId("shopping-cart-item")
        expect(ShoppingCartItem.length).toBe(1)
    })

    /**
     * When adding 3 products to the shopping cart we would expect them
     * to appear in the list of shopping cart items.
     */
    it("adds 3 products to shopping cart", async () => {
        render(<ShoppingCart/>);
        addProductToShoppingCart(["Macbook", "Iphone", "AirPods"])

        // Expect 3 products in shopping cart
        const ShoppingCartItem = screen.getAllByTestId("shopping-cart-item")
        expect(ShoppingCartItem.length).toBe(3)
    })

    /**
     * When removing one product from the shopping cart we would expect it
     * to disappear from the list of shopping cart items.
     */
    it("removes one product from shopping cart", async () => {
        render(<ShoppingCart/>);
        addProductToShoppingCart(["Macbook"])
        removeProductFromShoppingCart(["Macbook"])

        // Expect 0 products in shopping cart
        const ShoppingCartItem = screen.queryAllByTestId("shopping-cart-item")
        expect(ShoppingCartItem.length).toBe(0)
    })

    /**
     * When removing two products from the shopping cart we would expect them
     * to disappear from the list of shopping cart items.
     */
    it("removes 2 products from shopping cart", async () => {
        render(<ShoppingCart/>);
        addProductToShoppingCart(["Macbook", "Iphone", "AirPods"])
        removeProductFromShoppingCart(["Macbook", "Iphone"])

        // Expect 1 product in shopping cart
        const ShoppingCartItem = screen.queryAllByTestId("shopping-cart-item")
        expect(ShoppingCartItem.length).toBe(1)
    })

    /**
     * When a product is in shopping cart the add button should be disabled
     */
    it("add button should be disabled when product is in cart", async () => {
        render(<ShoppingCart/>)
        addProductToShoppingCart(["Macbook"])
        const ProductList = within(screen.getByTestId("product-list"))
        const ProductItem = within(ProductList.getByText("Macbook").parentElement)

        // Expect that the add button has the disabled css styles
        const buttonElement = ProductItem.getByRole("button", {name: "Add to cart"})
        expect(buttonElement).toHaveClass("product-item-btn-disabled")
    })

    /**
     * When a product is not in the cart the add button should be enabled
     */
    it("add button should be enabled when product is not in cart", async () => {
        render(<ShoppingCart/>)
        const ProductList = within(screen.getByTestId("product-list"))
        const ProductItem = within(ProductList.getByText("Macbook").parentElement)

        // Expect that the add button not has the disabled css styles
        const buttonElement = ProductItem.getByRole("button", {name: "Add to cart"})
        expect(buttonElement).not.toHaveClass("product-item-btn-disabled")
    })

})
