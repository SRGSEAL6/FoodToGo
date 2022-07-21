import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestOrderService {

  consumerOrderApi = "http://localhost:8181/api/order"
  
  acceptedRequests: any = []
  currentRequests = new BehaviorSubject<any>([])

  constructor(
    private httpClient: HttpClient
  ) { }

    getAllOrders(){
      return this.httpClient.get<any>(this.consumerOrderApi)
    }

    updateCurrentRequests(){
      return this.httpClient.patch(this.consumerOrderApi, {

      })}

    addToAcceptedRequests(orders: any){
      this.acceptedRequests.push(orders);
      this.currentRequests.next(this.acceptedRequests)
    }

}