import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component'
import { CopiesListComponent } from './copies-list/copies-list.component'

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BaremeComponent } from './bareme/bareme.component';
import { CorrectionExamenComponent } from './correction-examen/correction-examen.component'

@NgModule({
  declarations: [UserHomeComponent,ProfileComponent,CopiesListComponent,BaremeComponent,CorrectionExamenComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class UserModule { }
