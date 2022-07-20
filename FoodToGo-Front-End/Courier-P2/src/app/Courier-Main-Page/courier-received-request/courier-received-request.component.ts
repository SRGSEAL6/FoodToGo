import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestOrderService } from '../request-order/request-order.service';

@Component({
  selector: 'app-courier-received-request',
  templateUrl: './courier-received-request.component.html',
  styleUrls: ['./courier-received-request.component.css']
})
export class CourierReceivedRequestComponent implements OnInit {

  orders: Array<any> = []

  constructor(
    private requestOrderService: RequestOrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestOrderService.getAllOrders()
    .subscribe((orders: any) => {
      this.orders = orders;
      })
  }

  addToAcceptedRequests(orders: any){
    this.requestOrderService.addToAcceptedRequests(orders)
    this.router.navigate(['courierAcceptedRequest'])
  }

}
