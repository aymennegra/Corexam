import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModules } from './admin-routing.module';




import { FormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BoardAdminComponent } from 'src/app/components/board-admin/board-admin.component';


import { AddExamenComponent } from './add-examen/add-examen.component';
import { QuestionsForExamComponent } from './questions-for-exam/questions-for-exam.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ResponsePDFForExamComponent } from './response-pdf-for-exam/response-pdf-for-exam.component'
import { ExamensListComponent } from './examens-list/examens-list.component';
import { CopiesListComponent } from './copies-list/copies-list.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CorrectionExamenComponent } from './correction-examen/correction-examen.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BoardAdminComponent, QuestionsForExamComponent,
  UploadFilesComponent,AddExamenComponent, ResponsePDFForExamComponent,ProfileComponent,
  ExamensListComponent,CopiesListComponent,CorrectionExamenComponent],
  imports: [
    
    CommonModule,
    AdminRoutingModules,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MDBBootstrapModule,
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
