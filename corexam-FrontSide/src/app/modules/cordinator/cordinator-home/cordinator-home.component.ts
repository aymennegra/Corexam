import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/models/examen.model';
import { ResponsePDF } from 'src/app/models/responsePDF.model';
import { ExamenService } from 'src/app/services/examen.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-cordinator-home',
  templateUrl: './cordinator-home.component.html',
  styleUrls: ['./cordinator-home.component.css'] 
})
export class CordinatorHomeComponent implements OnInit {
  examens?: Examen[];
  responses?: ResponsePDF[];

  currentExamen?: Examen; 
  id:Number;
  user = this.tokenStorage.getUser();
  examCreator=this.user.username;
  
  constructor(private examenService: ExamenService, private tokenStorage: TokenStorageService,private router:Router) { }


  ngOnInit(): void {
        this.retrieveExamens(this.examCreator);
        this.retrieveExamsResponses(1);
  }
  
    retrieveExamens(examCreator): void {
    this.examenService.findByExamCreator(this.examCreator)
      .subscribe(
        data => {
          this.examens = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
      retrieveExamsResponses(id): void {
    this.examenService.getAllResponse(this.id)
      .subscribe(
        data => {
          this.responses = data;
         console.log("haaay el data")

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
    deleteExam(examen){
      this.examenService.idExamen = examen.id
      console.log(this.examenService.idExamen)
      this.examenService.deleteMyExam(examen.id).subscribe((data)=>{
        console.log('succes')
           window.location.reload();

      })
     }
     GoToResponses(examen) {
this.examenService.idExamen = examen.id
    this.router.navigate(['/cordinator/copiesList']);
     }
   
}
