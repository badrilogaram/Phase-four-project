import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/classes/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {

  cartItems: CartItem[] | any = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  isempty : boolean = false;
  
  constructor(private cartService: CartService) 
  { 
   
  }

  ngOnInit(): void
  {
    this.listCartItems();
  }

  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    if(this.cartItems.length == 0)
    {
      this.isempty = true;
    }
    else
    {
      this.isempty = false;
      // subscribe to the cart totalPrice
      this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
      );

      // subscribe to the cart totalQuantity
      this.cartService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
      );

      // compute cart total price and quantity
      this.cartService.computeCartTotals();
    }
    
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
    this.listCartItems();
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
    this.listCartItems();
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
    this.listCartItems();
  }

  order()
  {

  }

  listCartItems()
  {
    /* if(this.cartService.cartItems.length == 0)
    {
      this.cartItems = this.cartService.cartItems;
    }
    else
    { */
    let cart  = JSON.parse(sessionStorage.getItem("cartitems")as string);
    console.log(cart);
    if(cart != null)
    {
    this.cartItems = Object.entries(cart).map(e => e[1]);
    }
    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
    //}
    
  }

}
