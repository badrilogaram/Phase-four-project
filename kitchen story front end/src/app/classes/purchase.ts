
import { orders } from "./orders";
import { payment } from "./payment";
import { checkoutfoods } from 'src/app/classes/checkoutfoods';

export class Purchase 
{
    order? : orders;
    checkoutfood? : checkoutfoods[];
    orderpayments? : payment | null;

    constructor()
    {
        
    }
}
