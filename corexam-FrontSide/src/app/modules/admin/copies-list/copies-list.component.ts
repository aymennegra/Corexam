import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-copies-list',
  templateUrl: './copies-list.component.html',
  styleUrls: ['./copies-list.component.css'],
})
export class CopiesListComponent implements OnInit {

  tableData: object[] = [
    { first: '001', username: 'No', email: '0', country: '-'},
    { first: '002', username: 'No', email: '0', country: '-'},
    { first: '003', username: 'No', email: '0', country: '-'},
    { first: '004', username: 'No', email: '0', country: '-'},
    { first: '005', username: 'No', email: '0', country: '-'}
  ];
  private sorted = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  sortBy(by: string | any): void {

    this.tableData.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }
  redirectTo(){
    this.router.navigate(['/admin/correctionExam'])

  }
}