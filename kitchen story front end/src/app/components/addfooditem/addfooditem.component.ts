import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Ifooditem } from 'src/app/interfaces/ifooditem';
import { FoodserviceService } from 'src/app/services/foodservice.service';
import { Customvalidators } from 'src/app/validators/customvalidators';

@Component({
  selector: 'app-addfooditem',
  templateUrl: './addfooditem.component.html',
  styleUrls: ['./addfooditem.component.css']
})
export class AddfooditemComponent implements OnInit {

  public saveForm: FormGroup;
  public submitted = false;

  public isSaved : boolean = false;

  fooditem : Partial<Ifooditem> = {};

  //responseitem : Ifooditem = {};
  constructor(private router: Router,private foodservice : FoodserviceService) { 
    this.saveForm = new FormGroup({
      foodname: new FormControl('', [Validators.required,Customvalidators.notOnlyWhitespace,Validators.pattern('^[a-zA-Z]+(\\s[a-zA-Z]+)?$')]),
      price: new FormControl('', [Validators.required,Customvalidators.notOnlyWhitespace,Validators.pattern('^[0-9]+\\.[0-9]{1,2}$')]),
      image: new FormControl('', [Validators.required,Customvalidators.notOnlyWhitespace]),
     foodstatus: new FormControl('', [Validators.required])
    }); 

    
  }

  ngOnInit(): void {
   
  }

  get formControl() {
    return this.saveForm.controls;
  }

  save()
  {
    this.submitted = true;
    
    if (this.saveForm.valid)
    {
      console.log(this.saveForm.value.foodname);
      this.fooditem.foodname = this.saveForm.value.foodname;
      this.fooditem.price = this.saveForm.value.price;
      this.fooditem.image = this.saveForm.value.image;
      this.fooditem.foodstatus = this.saveForm.value.foodstatus;
      this.foodservice.addNewFoodItem(this.fooditem).subscribe(
        data => {
          console.log(data);
          this.isSaved = true;
          this.submitted = false;
          this.saveForm.reset();
        },
        error => {
          console.log('Got error while saving food item into database',error);
        }
      );
        
     /*  if(this.isSaved)
      {
        this.saveForm.reset(this.saveForm.value.foodname);
        this.saveForm.reset(this.saveForm.value.price);
        this.saveForm.reset(this.saveForm.value.image);
        this.saveForm.reset(this.saveForm.value.foodstatus);

        
      } */
    }
  }
}
