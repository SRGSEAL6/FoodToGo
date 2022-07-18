import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courier-frequent-questions',
  templateUrl: './courier-frequent-questions.component.html',
  styleUrls: ['./courier-frequent-questions.component.css']
})
export class CourierFrequentQuestionsComponent implements OnInit {

  currentQuestion = 0


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  toggleQuestionChange(event: Event, questionIndex: number){
    event.preventDefault()
    this.currentQuestion = questionIndex
    
  }

  isQuestionSelected(questionIndex: number){
    return this.currentQuestion === questionIndex

  }


}
