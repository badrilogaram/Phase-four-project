import { CartItem } from "./cart-item";

export class checkoutfoods 
{
    foodid : number;
    foodname : string;
    price : number;
    quantity : number;

    constructor(cartItem: CartItem)
    {
        this.foodid = cartItem.id;
        this.foodname = cartItem.name;
        this.price = cartItem.unitPrice;
        this.quantity = cartItem.quantity;
    }
}
