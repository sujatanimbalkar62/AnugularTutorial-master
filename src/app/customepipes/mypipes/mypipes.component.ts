import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypipes',
  templateUrl: './mypipes.component.html',
  styleUrls: ['./mypipes.component.css'],
})
export class MypipesComponent implements OnInit {
  constructor() {}

  employees: any = [
    { empno: '01', Name: 'reyansh aher', salary: '50,000', gender: 'male' },
    { empno: '02', Name: 'sujata aher', salary: '50,000', gender: 'female' },
    { empno: '03', Name: 'smita nimbalkar', salary: '50,000', gender: 'female' },
    { empno: '04', Name: 'amol aher', salary: '20,00000', gender: 'male' },
    { empno: '05', Name: 'yogita jadhav', salary: '30,000', gender: 'female' }
  ];
  ngOnInit(): void {}
}
