import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component'
import { CopiesListComponent } from './copies-list/copies-list.component'

import { UserHomeComponent } from './user-home/user-home.component';
import { CorrectionExamenComponent } from './correction-examen/correction-examen.component'

const routes: Routes = [
  { path: '', component: UserHomeComponent },
//  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'copiesList', component: CopiesListComponent },
  { path: 'correctionExam/:id', component: CorrectionExamenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
