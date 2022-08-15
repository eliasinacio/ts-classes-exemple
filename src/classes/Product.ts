import { inventoryData } from "../data/inventory"

export class Product {
	public readonly name: string;
	public readonly id: number;
	public readonly price: number;
	public readonly quantity: number = 0;
	private readonly stock: number;

	constructor(name: string, id: number, price: number) {
		this.name = name
		this.id = id
		this.price = price
		this.stock = this.getStock()
	}

	private getStock(): number {
		return checkStockForProduct(this.id)
	}

	isAvailable(): boolean{
		return this.stock > 0
	}
}

function checkStockForProduct (id: number) {
	const inventory = inventoryData

	const stock = inventory.find(item => {
        return item.id === id
    })?.inventory

	return stock || 0
}