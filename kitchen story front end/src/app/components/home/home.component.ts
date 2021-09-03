import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalPrice: number= 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) 
  {
    
  }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {

    this.cartService.computeCartTotals();
    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}
