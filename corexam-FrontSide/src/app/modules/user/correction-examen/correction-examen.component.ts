
import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import WebViewer from '@pdftron/webviewer';
import { ExamenService } from 'src/app/services/examen.service';
import {RouterModule, Router, ActivatedRoute} from '@angular/router';
import {switchMap} from "rxjs-compat/operator/switchMap";
import {Observable} from "rxjs";
import {Question} from '../../../models/question.model';
import {Examen} from "../../../models/examen.model";
import { ResponsePDF } from '../../../models/responsePDF.model';

@Component({
  selector: 'app-correction-examen',
  templateUrl: './correction-examen.component.html',
  styleUrls: ['./correction-examen.component.css']
})
export class CorrectionExamenComponent implements OnInit, AfterViewInit {

  filename;
  examId;

  questionSelected:Question;

  questions:Question[];
  totaleNote = 0;
  response:ResponsePDF ={};
  exam:Examen;

    constructor(private router:Router,private examenService: ExamenService,private route: ActivatedRoute) { }
  @ViewChild('viewer') viewer: ElementRef;
  wvInstance: any;

  ngAfterViewInit(): void {

    WebViewer({
      path: '../../assets/lib',
      initialDoc: `../../assets/files/td6.pdf`
    }, this.viewer.nativeElement).then(instance => {
      this.wvInstance = instance;

      // now you can access APIs through this.webviewer.getInstance()
      instance.openElements(['notesPanel']);
      // see https://www.pdftron.com/documentation/web/guides/ui/apis for the full list of APIs

      // or listen to events from the viewer element
      this.viewer.nativeElement.addEventListener('pageChanged', (e) => {
        const [ pageNumber ] = e.detail;
        console.log(`Current page is ${pageNumber}`);
      });

      // or from the docViewer instance
      instance.docViewer.on('annotationsLoaded', () => {
        console.log('annotations loaded');
      });

      instance.docViewer.on('documentLoaded', this.wvDocumentLoadedHandler)
    })
  }

  ngOnInit() {
    this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);
    this.filename = this.examenService.fileName;
    console.log(this.filename+"TEST HERE CORRECTION EXAMEN")
    this.examId = this.route.snapshot.paramMap.get('id');

    this.examenService.getAllQuestions(this.examId).subscribe(data=>{

      this.questions = data;
      this.calculate();
    })

   this.examenService.get(this.examId).subscribe(data => {
      this.exam = data
    })

  }

  wvDocumentLoadedHandler(): void {
    // you can access docViewer object for low-level APIs
    // and access classes defined in the WebViewer iframe
    const { Annotations, annotManager, docViewer } = this.wvInstance;
    const rectangle = new Annotations.RectangleAnnotation();
    rectangle.PageNumber = 1;
    rectangle.X = 100;
    rectangle.Y = 100;
    rectangle.Width = 200;
    rectangle.Height = 200;
    rectangle.StrokeThickness = 2;
    rectangle.Author = annotManager.getCurrentUser();
    annotManager.addAnnotation(rectangle);
    annotManager.drawAnnotations(rectangle.PageNumber);
    // see https://www.pdftron.com/api/web/WebViewer.html for the full list of low-level APIs
  }


  switchquestion(quest:Question) {
    console.log("-----------")
    this.questionSelected = quest;
    console.log(this.questionSelected)
  }

  addNoteExam(question: Question) {

   this.questions[this.questions.indexOf(this.questions.find(quest=> quest._id == question._id))] = question;
   this.calculate();
   

  }

  calculate() {
    this.totaleNote = 0;
    for (const quest of this.questions) {
      this.totaleNote += quest.qMark;
    }

  }

  updateExamen() {
    console.log(this.questions);
    console.log(this.totaleNote);
    for (const quest of this.questions) {
        // update question id
    }
    
    let x={
"_id": "608f39db74473003742f8d2e",
"idExam": 1,
"studentName": "hsouna",
"studentGrade": 5,
"studentFile": "TD2_TP2_CN_SEM201 (2).pdf",
"studentQuestions": [{
    "idExamQ": 1,
    "qName": "Q1",
    "qMark": 0,
    "qBarem": 2
}]
}
this.response.studentGrade = this.totaleNote;
this.response.studentQuestions=this.questions;
console.log(this.response);
    this.examenService.update(this.examId , this.response ).subscribe(data=>{
      console.log(data)
    })
  }
}


