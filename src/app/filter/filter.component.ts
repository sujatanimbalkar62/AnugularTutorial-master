import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

interface emp {
  id: number;
  name: string;
  gender: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  data: emp[] = [
    { id: 1, name: 'sujata', gender: 'Female' },
    { id: 2, name: 'reyansh', gender: 'male' },
    { id: 3, name: 'smita', gender: 'Female' },
    { id: 4, name: 'amol', gender: 'male' },
    { id: 5, name: 'nikhil', gender: 'male' },
    { id: 6, name: 'shriya', gender: 'Female' },
    { id: 7, name: 'akash', gender: 'male' },
    { id: 8, name: 'neha', gender: 'Female' },
    { id: 10, name: 'naina', gender: 'Female' },
    { id: 11, name: 'mayur', gender: 'male' },
  ];
  darares:any;
  darares2:any;
  darares3:any;
  constructor() {}

  ngOnInit(): void {
    const source = from(this.data);

    //filter by lenghth EX:1
    source
      .pipe(
        filter((member) => member.name.length > 4),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.darares = res;
      });
// filter by gender ex:2
      source
      .pipe(
      filter(member=>member.gender=="male"),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.darares2 = res;
      });
      // filter by nth turm ex:3
      source
      .pipe(
      filter(member=>member.id<=6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.darares3 = res;
      });
  }
}
