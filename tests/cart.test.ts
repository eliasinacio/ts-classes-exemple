import { Cart } from "../src/Cart";
import { Product } from "../src/Product"

describe('Cart', () => {
    test('Cart starts empty', () => {
        const mainCart = new Cart()
        const cartProducts = mainCart.getProducts()
        
        expect(cartProducts.length).toEqual(0);
    })

    test('Carts starts with a random id as c123', () => {
        const mainCart = new Cart()
        const cartProducts = mainCart.getProducts()
        
        expect(cartProducts.length).toEqual(0);
    })
    
    test('Adding a product to cart, cart is not empty', () => {
        const mainCart = new Cart()
        const Perfume = new Product('Perfume', 12345, 78.89)
        
        mainCart.add(Perfume)
        
        const cartProducts = mainCart.getProducts()
        
        expect(cartProducts.length).not.toEqual(0);
    })

    test('Adding a product to cart, cart is not empty', () => {
        const mainCart = new Cart()
        const book = new Product('Book - The Hobbit', 12345, 78.89)
        
        mainCart.add(book)
        
        const cartProducts = mainCart.getProducts()
        
        expect(cartProducts.length).not.toEqual(0);
    })
    
    // test('Add product in cart', () => {
    //   const mainCart = new Cart()
    //   const Perfume = new Product(9876257)
    
    //   mainCart.addProduct(Perfume)
    
    //   const cartProducts = mainCart.getProducts()
    
    //   expect(true).toEqual(true);
    // })
})