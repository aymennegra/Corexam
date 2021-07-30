import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExamenComponent } from './components/add-examen/add-examen.component';
import { ExamenDetailsComponent } from './components/examen-details/examen-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';

import { authInterceptorProviders } from './components/_helpers/auth.interceptor';
import { UserHomeComponent } from './user-home/user-home.component';
import { CorrectionExamenComponent } from './components/correction-examen/correction-examen.component';
import { CopiesBoxComponent } from './components/copies-box/copies-box.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CopiesListComponent } from './components/copies-list/copies-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ChoiceCardComponent } from './components/choice-card/choice-card.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component'

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    
    



  ],
  
  providers: [authInterceptorProviders,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
