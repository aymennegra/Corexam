import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen.model';
import { ResponsePDF } from '../models/responsePDF.model';
import { Question } from '../models/question.model';

const baseUrl = 'http://localhost:8080/api/MainExam';
const baseUrlFile = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class ExamenService {

 idExamen;
 fileName;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Examen[]> {
    return this.http.get<Examen[]>(baseUrl+'/all');
  }

  get(id: any): Observable<Examen> {
    return this.http.get(`${baseUrl}/findById/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  //DELETE MY EXAMS URL
 deleteMyExam(id: any): Observable<any> {
   console.log(id+"service")
    return this.http.delete(baseUrl+`/${id}`);
  }
  findByTitle(title: any): Observable<Examen[]> {
    return this.http.get<Examen[]>(`${baseUrl}?title=${title}`);
  }

   findByExamCreator(examCreator: any): Observable<Examen[]> {
    return this.http.get<Examen[]>(`${baseUrl}/find?examCreator=${examCreator}`);
  }
  
  findByExamCorrectorUsername(correctorUsername: any): Observable<Examen[]> {
    console.log(correctorUsername)
  return this.http.get<Examen[]>(`${baseUrl}/find/find?correctorUsername=${correctorUsername}`);
  }

   getAllResponse(id:Number): Observable<ResponsePDF[]> {
    return this.http.get<ResponsePDF[]>(baseUrl+`/findResById/${id}`);
  }

  getResponseById(id:any): Observable<ResponsePDF> {
    return this.http.get<ResponsePDF>(baseUrl+`/findResponseByResponseId/${id}`);
  }
     getAllQuestions(id:Number): Observable<Question[]> {
    return this.http.get<Question[]>(baseUrl+`/findQuesById/${id}`);
  }
     getFile(fileName:any): any {
           return this.http.get<any>(baseUrlFile+`/file/findFile/${this.fileName}`).toPromise();
  }
      getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(baseUrlFile+`/api/test/all`);
  }
}
