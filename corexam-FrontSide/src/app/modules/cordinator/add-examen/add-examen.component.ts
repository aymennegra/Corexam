import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/models/examen.model';
import { ExamenService } from 'src/app/services/examen.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {
  users;

  examen : any= {
  responsePDF: [],
  questions: [],
  className: '',
  subject: '',
  date: null,
  questionNbr: 0,
  totalMark: 0,
  pdfFile: '',
  copiesNbr: 0,
  correctorUsername: '',
  examCreator: ''

  };
  submitted = false;
  show = false;
  username:String;
  constructor(private examenService: ExamenService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  const user = this.tokenStorageService.getUser()
  this.username = user.username;
  console.log(this.username);
  this.examen.examCreator=this.username;
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

  updatePdf(file){
    this.examen.pdfFile=file.id
    //console.log(this.examen)
  }
  next(){
    if(confirm("Are you sureee "))
        this.show=!this.show
  }

  sendOption(user){
    console.log(user.username);
return user.username
  }



}
