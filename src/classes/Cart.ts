import { Product } from "./Product";

export class Cart {
    private readonly cartid: string = this.getCartId();
    private products: Product[] = [];

    private getCartId(): string {
        const cartId = generateRandomCartId()
        return cartId
    }
    
    getProducts(): Product[] {
      return this.products
    }
    
    getQuantity(): number {
      return this.products.length
    }

    add(product: Product): void {
        this.products.push(product)
    }

    remove(productId: number) {
        this.products.forEach((product, index) => {
            if (product.id === productId) {
                this.products.splice(index, 1)
            }
        })
    }
}

function generateRandomCartId () {
    const random = Math.floor(Math.random() * 1000)
    const id = 'c' + random
    return id
}