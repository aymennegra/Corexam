import {Component, Input, OnChanges, OnInit, Output, SimpleChanges , EventEmitter} from '@angular/core';
import {Question} from "../../../models/question.model";



@Component({
  selector: 'app-bareme',
  templateUrl: './bareme.component.html',
  styleUrls: ['./bareme.component.css']
})
export class BaremeComponent implements OnInit ,  OnChanges {


  @Input() quest: Question;
  @Output() newItemEvent = new EventEmitter<Question>();

  listeNotePossible: number[];
  noteSelected:number;

  constructor() { }

  ngOnInit(): void {
    this.listeNotePossible =[]
  }

  select(note :number) {
   this.noteSelected = note;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.listeNotePossible =[]

    var num=0;
    this.listeNotePossible.push(0)
    
    
    for (let i = 0; i < this.quest.qBarem*2; i++ ) {
      num += 0.5;
      console.log(this.quest.qBarem+"haha");
        this.listeNotePossible.push(num)
    }

  }

  submitNote() {
    //this.quest.qBarem = this.noteSelected;
    this.quest.qMark = this.noteSelected;
    this.newItemEvent.emit(this.quest);
  }

  resetNote() {
    this.quest.qMark = this.quest.qBarem;
    this.newItemEvent.emit(this.quest);
  }
  


}
