import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/models/examen.model';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {
  examen: Examen = {
    className: '',
    subject: '',
    date: '',
    questionNbr:0,
    totalMark:0,
    pdfFile:'',
    copiesNbr:0,
    correctorUsername:'',
    responsePDF:''

  };
  submitted = false;
  show = false;
  constructor(private examenService: ExamenService) { }

  ngOnInit(): void {
    this.examenService.getAllUsers();
    console.log(this.examenService.getAllUsers());
  }



  newExamen(): void {
    this.submitted = false;
    this.examen = {
    className: '',
    subject: '',
    date: '',
    questionNbr:0,
    totalMark:0,
    pdfFile:'',
    copiesNbr:0,
    correctorUsername:'',
    responsePDF:''
    };
  }

}
