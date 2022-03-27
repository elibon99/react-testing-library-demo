import {render, screen, fireEvent} from "@testing-library/react";
import ShoppingCart from "../ShoppingCart";
import {within} from "@testing-library/dom";

const addProduct = (products) => {
    const ProductList = within(screen.getByTestId("product-list"))
    products.forEach((product) => {
        const ProductItem = within(ProductList.getByText(product).parentElement)
        fireEvent.click(ProductItem.getByRole("button", {name: "Add to cart"}))
    })
}

const removeProduct = (products) => {
    const ShoppingCartList = within(screen.getByTestId("shopping-cart-list"))
    products.forEach((product) => {
        const ShoppingCartItem = within(ShoppingCartList.getByText(product).parentElement)
        fireEvent.click(ShoppingCartItem.getByTestId("remove-product-button"))
    })
}

describe("ShoppingCart", () => {
    it("adds one product to shopping cart", async () => {
        render(<ShoppingCart/>);
        addProduct(["Macbook"])
        const divElements = screen.getAllByTestId("shopping-cart-item")
        expect(divElements.length).toBe(1)
    })

    it("adds 3 products to shopping cart", async () => {
        render(<ShoppingCart/>);
        addProduct(["Macbook", "Iphone", "AirPods"])
        const divElements = screen.getAllByTestId("shopping-cart-item")
        expect(divElements.length).toBe(3)
    })

    it("removes 1 product from shopping cart", async () => {
        render(<ShoppingCart/>);
        addProduct(["Macbook"])
        removeProduct(["Macbook"])
        const divElements = screen.queryAllByTestId("shopping-cart-item")
        expect(divElements.length).toBe(0)
    })

    it("removes 2 products from shopping cart", async () => {
        render(<ShoppingCart/>);
        addProduct(["Macbook", "Iphone", "AirPods"])
        removeProduct(["Macbook", "Iphone"])
        const divElements = screen.queryAllByTestId("shopping-cart-item")
        expect(divElements.length).toBe(1)
    })

    it("add button should be disabled when product is in cart", async () => {
        render(<ShoppingCart/>)
        addProduct(["Macbook"])
        const ProductList = within(screen.getByTestId("product-list"))
        const ProductItem = within(ProductList.getByText("Macbook").parentElement)
        const buttonElement = ProductItem.getByRole("button", {name: "Add to cart"})
        expect(buttonElement).toHaveClass("product-item-btn-disabled")
    })

    it("add button should be enabled when product is not in cart", async () => {
        render(<ShoppingCart/>)
        const ProductList = within(screen.getByTestId("product-list"))
        const ProductItem = within(ProductList.getByText("Macbook").parentElement)
        const buttonElement = ProductItem.getByRole("button", {name: "Add to cart"})
        expect(buttonElement).not.toHaveClass("product-item-btn-disabled")
    })

})
