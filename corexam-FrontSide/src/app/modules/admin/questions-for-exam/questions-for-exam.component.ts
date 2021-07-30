import { Component, OnInit , Input } from '@angular/core';
import { Examen } from '../../../models/examen.model'
import { ExamenService } from "../../../services/examen.service";
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-questions-for-exam',
  templateUrl: './questions-for-exam.component.html',
  styleUrls: ['./questions-for-exam.component.css']
})
export class QuestionsForExamComponent implements OnInit {
      toggle:boolean=false;
  @Input() examen:Examen;
  constructor(private examenService: ExamenService, private toastr: ToastrService) { }
questions:any[] 
  ngOnInit(): void {
this.questions = new Array(this.examen.questionNbr);
     
  }
    next(): void {
      let sum=0;
      let questionsObj=[]
for( let i=0;i<this.questions.length;i++){
  sum+=this.questions[i];
  questionsObj.push({qName:'Q'+(i+1),qMark:this.questions[i]})
}
if(sum!=this.examen.totalMark){
  
console.log("Total mark FAIL !",sum,this.examen.totalMark)
  this.toastr.error('Total does not match  !','FAIL !');

  return
}
    const data = this.examen
    data.questions=questionsObj
     

    if(confirm("Are you sureee "))
        this.toggle=!this.toggle
  }

}
