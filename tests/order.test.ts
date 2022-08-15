import { Cart } from "../src/Cart";
import { Order } from "../src/Order";
import { Product } from "../src/Product"

describe('Order', () => {
    test('Cart starts empty', () => {
        const mainCart = new Cart()
        const cartProducts = mainCart.getProducts()
        
        expect(cartProducts.length).toBe(0);
    })
    
    // test('Add product in cart', () => {
    //     const mainCart = new Cart()
    //     const Perfume = new Product(9876257)
        
    //     mainCart.addProduct(Perfume)
        
    //     const cartProducts = mainCart.getProducts()
        
    //     expect(true).toBe(true);
    // })
    
    // test('Add product in cart', () => {
    //   const mainCart = new Cart()
    //   const Perfume = new Product(9876257)
    
    //   mainCart.addProduct(Perfume)
    
    //   const cartProducts = mainCart.getProducts()
    
    //   expect(true).toBe(true);
    // })
})