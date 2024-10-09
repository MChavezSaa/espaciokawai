export class Producto {
    id: number;           // id es un número
    name: string;         // name es una cadena
    description: string;  // description es una cadena
    image: string;        // image es una cadena
    price: number;        // price es un número

    constructor(id: number, name: string, description: string, image: string, price: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
    }
}
