import { Component, OnInit } from '@angular/core';
import { CourierIntroductionService } from './courier-introduction.service';

@Component({
  selector: 'app-courier-introduction',
  templateUrl: './courier-introduction.component.html',
  styleUrls: ['./courier-introduction.component.css']
})
export class CourierIntroductionComponent implements OnInit {

  introduction: string = ""

  constructor(
    private introService: CourierIntroductionService
  ) { }

  ngOnInit(): void {
    this.introService.getCourierIntroduction()
      .subscribe({
        next:(i:any)=>{
          this.introduction = i;
        }
      })
  }

}
