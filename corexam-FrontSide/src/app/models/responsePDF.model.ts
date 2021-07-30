import { Question } from './question.model';
export class ResponsePDF {
   _id?:string;
   idExam?:number;
   studentName?:string;
   studentGrade?:number;
   studentFile?:string;
   studentQuestions?:Question[];

}