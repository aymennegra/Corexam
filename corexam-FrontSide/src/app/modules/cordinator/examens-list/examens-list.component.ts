import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/models/examen.model';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examens-list',
  templateUrl: './examens-list.component.html',
  styleUrls: ['./examens-list.component.css']
})
export class  ExamensListComponent implements OnInit {

  examens?: Examen[];
  currentExamen?: Examen;
  currentIndex = -1;
    subject = '';
    className: '';
    date: '';
    questionNbr:0;
    totalMark:0;
    pdfFile:''; 
    copiesNbr:0;
    correctorUsername:'';
    responsePDF:[];

  constructor(private examenService: ExamenService) { }

  ngOnInit(): void {
    this.retrieveExamens();
  }
  retrieveExamens(): void {
    this.examenService.getAll()
      .subscribe(
        data => {
          this.examens = data;
          console.log(data);
          //console.log(data.responsePDF.id)
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveExamens();
    this.currentExamen = undefined;
    this.currentIndex = -1;
   
  }

  setActiveExamen(examen: Examen, index: number): void {
    this.currentExamen= examen;
    this.currentIndex = index;
  }

  removeAllTExamens(): void {
    this.examenService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentExamen= undefined;
    this.currentIndex = -1;

    this.examenService.findByTitle(this.subject)
      .subscribe(
        data => {
          this.examens = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


/*
  showMyExamsCordinator(): void {
    this.currentExamen= undefined;
    this.currentIndex = -1;

    this.examenService.findBy(this.subject)
      .subscribe(
        data => {
          this.examens = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  */
}
