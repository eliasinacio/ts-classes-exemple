import { Product } from "../src/classes/Product"
import * as testFunctions from "../src/index"
import { productsDataBase } from "../src/data/products"

describe('Product Class', () => {
    test('create a new Product', () => {
        const product = new Product('Notebook', 11198, 4489.89);

        const validate = product.id === 11198 && product.name === 'Notebook' && product.price === 4489.89

        expect(validate).toEqual(true);
    })

    test('product starts with quantity 0', () => {
        const product = new Product('Notebook', 11189, 3449.89);
        const quantity = product.quantity

        expect(quantity).toEqual(0);
    })

    test('product 11127 is Available', () => {
        const product = new Product('Smartphone', 11127, 2100.00);
        const isAvailable = product.isAvailable()

        expect(isAvailable).toEqual(true);
    })

    test('product 11162 is not Available', () => {
        const product = new Product('Sample Pen', 11162, 1.10);
        const isAvailable = product.isAvailable()

        expect(isAvailable).toEqual(false);
    })
})

describe('Product Class', () => {
    test('return false to a invalid ID - 99999', () => {
        const product = testFunctions.getProduct(99999)
        const expectedValue = false

        expect(product).toEqual(expectedValue);
    })

    test('Get product with a valid ID - 11100', () => {
        const product = testFunctions.getProduct(11100)
        const name = !!product ? product.name : false

        const expectedValue = 'Clean Code Book'

        expect(name).toEqual(expectedValue);
    })
})