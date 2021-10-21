import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  randomNames = ['Amol', 'Sujata', 'Reyansh', 'Nikhil', 'Anmol', 'smita'];
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    const nameSource = from(this.randomNames);

    //Ex:1|take
    nameSource.pipe(take(4)).subscribe((res) => {
      console.log(res);
      this.service.print(res, 'elContainer1');
    });

    //Ex:2|takelast
    nameSource.pipe(takeLast(4)).subscribe((res) => {
      console.log(res);
      this.service.print(res, 'elContainer2');
    });
    //Ex:3|takeuntil

    const source = interval(1000);
    let condition1=timer(6000);
    //let condition2=fromEvent(document,'click')

    source.pipe(
      map((res) => 'Number ' + res),
      takeUntil(condition1)).subscribe((res) => {
      console.log(res);
      this.service.print(res, 'elContainer3');
    });
  }
}
