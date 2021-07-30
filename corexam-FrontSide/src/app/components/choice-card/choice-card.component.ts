import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-choice-card',
  templateUrl: './choice-card.component.html',
  styleUrls: ['./choice-card.component.css']
})
export class ChoiceCardComponent implements OnInit {

@Input()
currentTitle:string;
@Input()
currentDesc:string;

  constructor() { }

  ngOnInit() {
console.log(this.currentTitle)
console.log(this.currentDesc)

     }    
}


