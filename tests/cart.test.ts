import { Cart } from "../src/classes/Cart";
import { Product } from "../src/classes/Product"

describe('Cart', () => {
    test('Cart starts empty', () => {
        const mainCart = new Cart()
        const cartProducts = mainCart.getProducts()
        
        expect(cartProducts.length).toEqual(0);
    })

    test('Adding a product to cart, cart is not empty', () => {
        const mainCart = new Cart()
        const book = new Product('Book - The Hobbit', 12345, 78.89)
        
        mainCart.add(book)
        
        const cartProducts = mainCart.getProducts()
        
        expect(cartProducts.length).not.toEqual(0);
    })

    test('Adding and removing product, cart is empty', () => {
        const mainCart = new Cart()
        const book = new Product('Book - The Hobbit', 12345, 78.89)
        
        mainCart.add(book)

        mainCart.remove(book.id)
        
        const cartProducts = mainCart.getProducts()
        
        expect(cartProducts.length).toEqual(0);
    })

    test('try removing id not in cart', () => {
        const mainCart = new Cart()
        const book = new Product('Book - The Hobbit', 12345, 78.89)
        
        mainCart.add(book)

        mainCart.remove(999)
        
        const cartProducts = mainCart.getProducts()
        
        expect(cartProducts.length).not.toEqual(0);
    })
})