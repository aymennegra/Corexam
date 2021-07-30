import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/models/examen.model';
import { ExamenService } from 'src/app/services/examen.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  examens?: Examen[];
  currentExamen?: Examen;
  user = this.tokenStorage.getUser();
  correctorUsername=this.user.username;

  constructor(private examenService: ExamenService, private tokenStorage: TokenStorageService, private router:Router) { }


  ngOnInit(): void {
        this.retrieveExamens(this.correctorUsername);
  }

   reloadPage(): void {
    window.location.reload();
  }

    retrieveExamens(correctorUsername): void {
      console.log(correctorUsername);
    this.examenService.findByExamCorrectorUsername(this.correctorUsername)
      .subscribe(
        data => {
          this.examens = data;
          console.log(data);
        },
        error => { 
          console.log(error);
        });
  }
       GoToResponses(examen) {
this.examenService.idExamen = examen.id
    this.router.navigate(['/user/copiesList']);
     }


}
