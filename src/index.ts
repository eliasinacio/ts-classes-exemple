import { Cart } from "./classes/Cart";
import { productsDataBase } from "./data/products";
import { Product } from "./classes/Product";

export function getProduct (id: number) {
    const productsList = productsDataBase

    const productData = productsList.find(item => {
        return item.id === id
    })

    if (productData) {
        const { name, id, price } = productData
        const product = new Product(name, id, price)
        return product
    } else {
        return false
    }
}