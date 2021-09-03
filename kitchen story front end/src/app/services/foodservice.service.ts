import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ifooditem } from '../interfaces/ifooditem';


@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  private baseUrl : string = 'http://localhost:8080/api/';
  constructor(private http : HttpClient) 
  { }

  getAllFoodItems():Observable<Ifooditem[]>
  {
    return this.http.get<Ifooditem[]>(this.baseUrl + 'foodlist');
  }

  addNewFoodItem(fooditem:Partial<Ifooditem>):Observable<Ifooditem>
  {
    return this.http.post<Ifooditem>(this.baseUrl + 'addfooditem',fooditem);
  }

  removeFoodItem(id : any):Observable<Ifooditem>
  {
    return this.http.delete<Ifooditem>(`${this.baseUrl}removefooditem/${id}`);
    
  }
}
