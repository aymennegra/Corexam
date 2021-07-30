import { DataServiceService } from './../../data-service.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {Router} from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentLoggedIn: boolean;
  currentUsername: String;


  constructor(
  private authService: AuthService,
  private tokenStorage: TokenStorageService,
  private http: HttpClient,
  private data: DataServiceService,
  private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }



  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.data.changeLoggedSource(this.isLoggedIn);
        this.data.changeUsernameSource("Djayja");
        this.roles = this.tokenStorage.getUser().roles;

          if (this.roles.includes('ROLE_USER')){
            console.log("aaaa")
            this.router.navigate(['user'])
          }

            },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

    login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signin', {
      username,
      password
    }, httpOptions);
    
    console.log("1");
  }

  reloadPage(): void {
    window.location.reload();
  }
}
