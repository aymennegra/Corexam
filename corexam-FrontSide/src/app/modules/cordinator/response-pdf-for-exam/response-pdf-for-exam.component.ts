import { Component, OnInit , Input } from '@angular/core';
import { Examen } from '../../../models/examen.model'
import { ExamenService } from "../../../services/examen.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-response-pdf-for-exam',
  templateUrl: './response-pdf-for-exam.component.html',
  styleUrls: ['./response-pdf-for-exam.component.css']
})
export class ResponsePDFForExamComponent implements OnInit {

  @Input() examen;
  @Input() user;
  constructor(private examenService: ExamenService, private toastr: ToastrService) { }
responsePDF:any[] 
filename;
filenameList:any[]=[];
users;

  ngOnInit(): void {
  this.getAllUsersFunc();

this.responsePDF = new Array(this.examen.copiesNbr);
     for(let i=0;i<this.responsePDF.length;i++){
     this.responsePDF[i]={studentName:'',studentGrade:0,studentFile:''}
console.log(this.responsePDF[i])

     }

  }
    saveExamen(): void {
    const data = this.examen
    const option = this.user
    console.log(option);    
    data.correctorUsername=option;
    data.responsePDF=this.responsePDF
    console.log(data)
    console.log(this.responsePDF + "Here")
         for(let i=0;i<this.responsePDF.length;i++){
               data.responsePDF[i].studentFile = this.filenameList[i];
//               this.examenService.fileName  = 
//to fix
         }

      this.examenService.create(data)
      .subscribe(
        response => {
          console.log(response);
     this.examenService.fileName=null;

           this.toastr.success('Exam Added successfully !','Success !');
        },
        error => {
          console.log(error);
                     this.toastr.error('Total does not match  !','FAIL !');

        });
        console.log(this.examenService.fileName);
  }

  resPdf(file,i){
    this.responsePDF[i].responseFile=file.id
  this.filenameList.push(file.name)
    console.log(file);
  }
getAllUsersFunc(){
    this.examenService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    },
    err=>{
      console.log(Error)
    });

}
    sendOption(user){
    console.log(user.username);
return user.username
  }

}
