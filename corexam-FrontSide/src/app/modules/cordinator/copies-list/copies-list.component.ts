import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-copies-list',
  templateUrl: './copies-list.component.html',
  styleUrls: ['./copies-list.component.css'],
})
export class CopiesListComponent implements OnInit {
idExamen;
responses;
moyenne=0;

  private sorted = false;
  constructor(private router:Router,private examenService: ExamenService) { }

  ngOnInit() {
    this.idExamen=this.examenService.idExamen;
    this.getResponsesExamen(this.idExamen)
    
  }

  sortBy(by: string | any): void {

    this.responses.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }
  redirectTo(){
    this.router.navigate(['/cordinator/correctionExam'])

  }

  getResponsesExamen(idExamen){
  this.examenService.getAllResponse(idExamen).subscribe(data => {
  
this.responses = data;
this.responses.forEach(element => {
  console.log(element.studentGrade);
  this.moyenne+=element.studentGrade; 
});
this.moyenne=this.moyenne/this.responses.length;
console.log(this.moyenne);
console.log(this.responses);
  },
  error=>{
    console.log(error);
  });
  }

     GoToPdfViewer(row) {
console.log(row)
this.examenService.fileName = row.studentFile;
this.examenService.getFile(row.studentFile).then(
  this.router.navigate(['/cordinator/correctionExam/' + row._id])
);

    
     }
}