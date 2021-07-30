import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CordinatorHomeComponent } from './cordinator-home/cordinator-home.component';
import { CordinatorRoutingModules } from './cordinator-routing.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AddExamenComponent } from './add-examen/add-examen.component';
import { QuestionsForExamComponent } from './questions-for-exam/questions-for-exam.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ResponsePDFForExamComponent } from './response-pdf-for-exam/response-pdf-for-exam.component'
import { ProfileComponent } from './profile/profile.component';
import { ExamensListComponent } from './examens-list/examens-list.component';
import { CopiesListComponent } from './copies-list/copies-list.component';
import { CorrectionExamenComponent } from './correction-examen/correction-examen.component'

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BaremeComponent } from './bareme/bareme.component';

@NgModule({
  declarations: [CordinatorHomeComponent,AddExamenComponent,
  QuestionsForExamComponent,UploadFilesComponent,ResponsePDFForExamComponent,ProfileComponent,ExamensListComponent,CopiesListComponent,CorrectionExamenComponent, BaremeComponent],
  imports: [
    CommonModule,
    CordinatorRoutingModules,
    MatInputModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
     MatInputModule,
    MatButtonModule,
      CommonModule,
    RouterModule
  ]
})
export class CordinatorModule { }
