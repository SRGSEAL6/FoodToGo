import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ORDER} from './mock-order';
import { CustomerOrder } from './mock-request-order';
import { RequestOrderService } from './request-order.service';


@Component({
  selector: 'app-request-order',
  templateUrl: './request-order.component.html',
  styleUrls: ['./request-order.component.css']
})
export class RequestOrderComponent implements OnInit {

  orders: Array<any> = []

  constructor(
    private router: Router,
    private requestOrderService: RequestOrderService
  ) { }

  ngOnInit(): void {
    this.requestOrderService.getAllOrders()
      .subscribe((orders: any) => {
        this.orders = orders;
        })
  }


}
