import { Product } from "../src/Product"

describe('Product', () => {
    test('create a new Product', () => {
        const notebook = new Product('Notebook', 11198, 4489.89);

        expect(notebook).toEqual({ quantity: 0, name: 'Notebook', id: 11198, price: 4489.89 });
    })

    test('product starts with quantity 0', () => {
        const notebook = new Product('Notebook', 11189, 3449.89);
        const quantity = notebook.quantity

        expect(quantity).toEqual(0);
    })
    
    // test('Adding a product to cart, cart is not empty', () => {
    //     const mainCart = new Cart()
    //     const Perfume = new Product('Perfume', 12345, 78.89)
        
    //     mainCart.addProduct(Perfume)
        
    //     const cartProducts = mainCart.getProducts()
        
    //     expect(cartProducts.length).not.toEqual(0);
    // })

    // test('Adding a product to cart, cart is not empty', () => {
    //     const mainCart = new Cart()
    //     const book = new Product('Book - The Hobbit', 12345, 78.89)
        
    //     mainCart.addProduct(book)
        
    //     const cartProducts = mainCart.getProducts()
        
    //     expect(cartProducts.length).not.toEqual(0);
    // })
    
    // test('Add product in cart', () => {
    //   const mainCart = new Cart()
    //   const Perfume = new Product(9876257)
    
    //   mainCart.addProduct(Perfume)
    
    //   const cartProducts = mainCart.getProducts()
    
    //   expect(true).toEqual(true);
    // })
})