import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-ordermsgdisplay',
  templateUrl: './ordermsgdisplay.component.html',
  styleUrls: ['./ordermsgdisplay.component.css']
})
export class OrdermsgdisplayComponent implements OnInit {

  ordertrackingno : string = "";
  constructor(private checkoutservice:CheckoutService) { }

  ngOnInit(): void {
    this.ordertrackingno = this.checkoutservice.orderTrackingNo;
  }

}
