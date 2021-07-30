
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
  resId;

  questionSelected:Question;
  responsePdf:ResponsePDF = {};

  questions:Question[];
  totaleNote = 0;
  response:ResponsePDF ={};
  exam:Examen;

    constructor(private router:Router,private examenService: ExamenService,private route: ActivatedRoute) { }
  @ViewChild('viewer') viewer: ElementRef;
  wvInstance: any;

  ngAfterViewInit(): void {
  
  
  }

  ngOnInit() {
    this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);
   
    
   // this.examId = this.route.snapshot.paramMap.get('id');
    this.resId = this.route.snapshot.paramMap.get('id');

    this.examenService.getResponseById(this.resId).subscribe(data=>{
      this.responsePdf = data;
      this.filename = this.responsePdf.studentFile;

      console.log(this.filename)
      this.examenService.getAllQuestions(this.responsePdf.idExam).subscribe(data=>{

        this.questions = data;
        this.calculate();
      })
      this.examenService.get(this.responsePdf.idExam).subscribe(data => {
        this.exam = data
      })
    } , err => {
      console.log(err)
    } , ()=> {
      WebViewer({
        path: '../../assets/lib',
        initialDoc: `../../assets/files/${this.filename}`
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
 
this.responsePdf.studentGrade = this.totaleNote;
this.responsePdf.studentQuestions=this.questions;
console.log(this.response);
    this.examenService.update(this.responsePdf._id , this.responsePdf ).subscribe(data=>{
      console.log(data)
    })
  }
}


