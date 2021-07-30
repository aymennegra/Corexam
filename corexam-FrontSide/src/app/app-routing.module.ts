import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamenDetailsComponent } from './components/examen-details/examen-details.component';
import { AddExamenComponent } from './components/add-examen/add-examen.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { UserHomeGuard } from './user-home.guard';
import { CorrectionExamenComponent } from './components/correction-examen/correction-examen.component'
import { CopiesListComponent } from './components/copies-list/copies-list.component'

import {   AuthGuardServiceGuard } from './services/auth-guard-service.guard';


const routes: Routes = [



  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 // { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path : 'admin'  , loadChildren : () => import('./modules/admin/admin.module').then(mod => mod.AdminModule) , canActivate : [AuthGuardServiceGuard] , data : { role : 'ROLE_ADMIN'}} ,
  { path : 'user' , loadChildren : () => import('./modules/user/user.module').then(mod => mod.UserModule) , canActivate : [AuthGuardServiceGuard] ,   data : { role : 'ROLE_USER'}} ,
  { path : 'cordinator'   , loadChildren : () => import('./modules/cordinator/cordinator.module').then(mod => mod.CordinatorModule) , canActivate : [AuthGuardServiceGuard] , data : { role : 'ROLE_MODERATOR'}} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
