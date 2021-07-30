export class Examen {
  id?: any;
  className?:string;
  subject?:string;
  date?:string;
  questionNbr?:number;
  totalMark?:number;
  questions?= [];
  pdfFile?:string;
  copiesNbr?:number;
  correctorUsername?:string;
  responsePDF?:string;
  totalMarkStudent?:number;
}
