import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/models/examen.model';

@Component({
  selector: 'app-examen-details',
  templateUrl: './examen-details.component.html',
  styleUrls: ['./examen-details.component.css']
})
export class ExamenDetailsComponent implements OnInit {
  currentExamen: Examen = {
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
  message = '';

  constructor(
    
    private examenService: ExamenService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getExamen(this.route.snapshot.params.id);
  }

  getExamen(id: string): void {
    this.examenService.get(id)
      .subscribe(
        data => {
          this.currentExamen = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

/*
  updatePublished(status: boolean): void {
    const data = {
      subject: this.currentExamen.subject,
      date: this.currentExamen.date,
      questionNbr: this.currentExamen.questionNbr,
      totalMark: this.currentExamen.totalMark,
      published: status
    };

    this.message = '';

    this.examenService.update(this.currentExamen.id, data)
      .subscribe(
        response => {
          this.currentExamen.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'This examen was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
*/
  updateExamen(): void {
    this.message = '';

    this.examenService.update(this.currentExamen.id, this.currentExamen)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This examen was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteExamen(): void {
    this.examenService.delete(this.currentExamen.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/examens']);
        },
        error => {
          console.log(error);
        });
  }
}
