import { Ifooditem } from "../interfaces/ifooditem";

export class CartItem 
{
    id: number;
    name: string;
    imageUrl: string;
    unitPrice: number;
    quantity: number;

    constructor(fooditem: Ifooditem) {
        this.id = fooditem.foodId;
        this.name = fooditem.foodname;
        this.imageUrl = fooditem.image;
        this.unitPrice = fooditem.price;
        this.quantity = 1;
    }
}
