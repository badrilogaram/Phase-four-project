import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/classes/cart-item';
import { Ifooditem } from 'src/app/interfaces/ifooditem';
import { CartService } from 'src/app/services/cart.service';
import { FoodserviceService } from 'src/app/services/foodservice.service';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {

  fooditems: Ifooditem[] = [];

  keyword : any;
  p:number = 1;
  headElements = ['Food Name', 'Price'];
  constructor(private foodservice : FoodserviceService,private cartservice:CartService) { }

  ngOnInit(): void 
  {
    this.foodservice.getAllFoodItems().subscribe(
      fooditems => this.fooditems = fooditems.filter(fooditem => fooditem.foodstatus === "available"),
      error => {
        console.log('Got error while fetching food items list',error);
      }
    );

    //this.fooditems = this.fooditems.filter(fooditem => fooditem.foodstatus === "available")
  }

  addToCart(fooditem : Ifooditem)
  {
    console.log(`Adding to cart: ${fooditem.foodname}, ${fooditem.price}`);

    // TODO ... do the real work
    const theCartItem = new CartItem(fooditem);

    this.cartservice.addToCart(theCartItem);
  }

  Search()
  {
    if(this.keyword == "")
    {
      this.ngOnInit();
    }
    else
    {
      this.fooditems = this.fooditems.filter(res=>{
        return res.foodname.toLocaleLowerCase().match(this.keyword.toLocaleLowerCase());
      });
    }
  }
}
