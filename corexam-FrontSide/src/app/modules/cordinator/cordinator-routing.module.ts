import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CordinatorHomeComponent } from './cordinator-home/cordinator-home.component';
import { AddExamenComponent } from './add-examen/add-examen.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamensListComponent } from './examens-list/examens-list.component';
import { CopiesListComponent } from './copies-list/copies-list.component'
import { CorrectionExamenComponent } from './correction-examen/correction-examen.component'

const routes: Routes = [
  { path: '', component: CordinatorHomeComponent },
  { path: 'examens', component: ExamensListComponent },
//  { path: 'examens/:id', component: ExamenDetailsComponent },
  { path: 'add-examen', component: AddExamenComponent },
  { path: 'profile', component: ProfileComponent },
   { path: 'correctionExam/:id', component: CorrectionExamenComponent },
  // { path: 'copiesList', component: CopiesListComponent }
    // { path: 'copiesList', component: CopiesListComponent }
  { path: 'copiesList', component: CopiesListComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CordinatorRoutingModules { }
