import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExamenComponent } from './add-examen/add-examen.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamensListComponent } from './examens-list/examens-list.component';
import { CopiesListComponent } from './copies-list/copies-list.component'
import { CorrectionExamenComponent } from './correction-examen/correction-examen.component'
const routes: Routes = [
    { path: '', component: BoardAdminComponent },
    { path: 'add-examen', component: AddExamenComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'examens', component: ExamensListComponent },
    { path: 'copiesList', component: CopiesListComponent },
    { path: 'correctionExam', component: CorrectionExamenComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModules { }
