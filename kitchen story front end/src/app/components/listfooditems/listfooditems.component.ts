import { Component, OnInit } from '@angular/core';
import { Ifooditem } from 'src/app/interfaces/ifooditem';
import { FoodserviceService } from 'src/app/services/foodservice.service';

@Component({
  selector: 'app-listfooditems',
  templateUrl: './listfooditems.component.html',
  styleUrls: ['./listfooditems.component.css']
})
export class ListfooditemsComponent implements OnInit {

  fooditems: Ifooditem[] = [];
  p:number = 1;
  headElements = ['ID', 'Food Name', 'Price', 'Image','Status'];
  constructor(private foodservice : FoodserviceService) { }

  ngOnInit(): void {

    this.foodservice.getAllFoodItems().subscribe(
      fooditems => this.fooditems = fooditems,
      error => {
        console.log('Got error while fetching food items list',error);
      }
    );
  }

}
