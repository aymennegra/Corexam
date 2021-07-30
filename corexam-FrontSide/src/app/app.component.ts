import { DataServiceService } from './data-service.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
import { LoginComponent } from "./components/login/login.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  logginStatus:boolean;
  usernameStatus:String;
  title = 'Corexam';
  where=""

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService , private data: DataServiceService , private tokenStorageService: TokenStorageService, private router:Router) { }


  ngOnInit(){
if (this.tokenStorage.getToken() != null){
  
  this.isLoggedIn = true;
  const user = this.tokenStorageService.getUser();
  this.roles = user.roles;
    if (this.roles[0] === 'ROLE_ADMIN'){
      this.where="/admin"
    }else if (this.roles[0]  === 'ROLE_USER'){
      this.where="/user"
    }else if (this.roles[0]  === 'ROLE_MODERATOR'){
      this.where="/cordinator"
    }
  this.username = user.username;

}else {
  this.isLoggedIn = false;
}


     }
 logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  changerEspace(role:String){

    if (role === 'ROLE_ADMIN'){
      this.router.navigate(['/admin'])
      this.where="/admin"
    }else if (role === 'ROLE_USER'){
      this.router.navigate(['/user'])
      this.where="/user"
    }else if (role === 'ROLE_MODERATOR'){
      this.router.navigate(['/cordinator'])
      this.where="/cordinator"
    }
    console.log(role)
    console.log(this.username)
  }


}
