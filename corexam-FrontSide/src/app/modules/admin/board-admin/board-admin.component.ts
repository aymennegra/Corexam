import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model'
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  users?:User[]
  currentUser?: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.retrieveUsers()
  }

      retrieveUsers(): void {
    this.userService.findAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
          this.users.forEach(element => {
            console.log(element);
            
          });
        },
        error => {
          console.log(error);
        });
  }


}
