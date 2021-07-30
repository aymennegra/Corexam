import { Component, OnInit , Input } from '@angular/core';
import { Examen } from '../../../models/examen.model'
import { ExamenService } from "../../../services/examen.service";
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router'
@Component({
  selector: 'app-response-pdf-for-exam',
  templateUrl: './response-pdf-for-exam.component.html',
  styleUrls: ['./response-pdf-for-exam.component.css']
})
export class ResponsePDFForExamComponent implements OnInit {

  @Input() examen;
  constructor(private examenService: ExamenService, private toastr: ToastrService , router:Router) { }
responsePDF:any[] 
  ngOnInit(): void {
this.responsePDF = new Array(this.examen.copiesNbr);
     for(let i=0;i<this.responsePDF.length;i++)
        this.responsePDF[i]={studentName:'',studentGrade:0,responseFile:''}
  }
    saveExamen(): void {
  
    const data = this.examen
    data.responsePDF=this.responsePDF
      this.examenService.create(data)
      .subscribe(
        response => {
          console.log(response);

           this.toastr.success('Exam Added successfully !','Success !');
           //this.router.navigate(['../cordinator'])

        },
        error => {
          console.log(error);
                     this.toastr.error('Total does not match  !','FAIL !');

        });
               //    this.router.navigate(['../cordinator'])

  }

  resPdf(file,i){
    this.responsePDF[i].responseFile=file.id
  }

}
