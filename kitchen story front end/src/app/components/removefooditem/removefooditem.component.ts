import { Component, OnInit } from '@angular/core';
import { Ifooditem } from 'src/app/interfaces/ifooditem';
import { FoodserviceService } from 'src/app/services/foodservice.service';

@Component({
  selector: 'app-removefooditem',
  templateUrl: './removefooditem.component.html',
  styleUrls: ['./removefooditem.component.css']
})
export class RemovefooditemComponent implements OnInit {

  fooditems: Ifooditem[] = [];
  
  fooditem : Ifooditem | any;
  p:number = 1;
  headElements = ['ID', 'Food Name', 'Price', ''];
  constructor(private foodservice : FoodserviceService) { }

  ngOnInit(): void 
  {
    this.getFoodItems();
  }

  getFoodItems()
  {
    this.foodservice.getAllFoodItems().subscribe(
      fooditems => this.fooditems = fooditems.filter(fooditem => fooditem.foodstatus === "available"),
      error => {
        console.log('Got error while fetching food items list',error);
      }
    );
  }
  removefooditem(fooditem : Ifooditem)
  {
    if(confirm("Do you want to remove the food item?"))
    {
      this.foodservice.removeFoodItem(fooditem.foodId).subscribe(
        fooditem => {
          this.fooditem = fooditem;
          this.getFoodItems();
        },
        error => {
          console.log('Got error while fetching food items list',error);
        }
      ); 
    }
    else
    {
      return;
    }
    
  }

}
