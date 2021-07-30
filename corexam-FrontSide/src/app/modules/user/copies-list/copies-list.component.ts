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
    this.router.navigate(['/user/correctionExam'])

  }

  getResponsesExamen(idExamen){
  this.examenService.getAllResponse(idExamen).subscribe(data => {
this.responses = data;
console.log(this.responses);
  },
  error=>{
    console.log(error);
  });
  }

     GoToPdfViewer(row) {
this.examenService.fileName = row.studentFile;
this.examenService.getFile(row.studentFile);


console.log(this.examenService.getFile(row.studentFile))

    this.router.navigate(['/user/correctionExam/' + row.idExam]);
     }
}