export class Product {
	public readonly name: string;
	public readonly id: number;
	public readonly price: number;
	public readonly quantity: number = 0;

	constructor(name: string, id: number, price: number) {
		this.name = name
		this.id = id
		this.price = price
	}
}
