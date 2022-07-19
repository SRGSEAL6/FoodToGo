import { Component, OnInit } from '@angular/core';
import { CourierMainService } from './courier-main.service';


@Component({
  selector: 'app-courier-main',
  templateUrl: './courier-main.component.html',
  styleUrls: ['./courier-main.component.css']
})
export class CourierMainComponent implements OnInit {

  main: string = ""

  constructor(
    private mainService: CourierMainService,
  ) { }

  ngOnInit(): void {
    this.mainService.getCourierMain()
      .subscribe({
        next:(m:any)=>{
          this.main = m;
        }
      })
  }
}