import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent implements OnInit {
  obsMsg: any;
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    //of
    const obs1 = of('Anup', 'Shekhar', 'Sharma');
    obs1.subscribe((res: any) => {
      console.log(res);
      this.service.print(res, 'elContainer');
    });

    const obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });

    obs2.subscribe((res: any) => {
      this.obsMsg = res;
      console.log('obsMeg=>', res);
      // this.service.print(res,'elContainer')
    });

    //from
    const obs3 = from(['john', 'Shekhar', 'alex']);
    obs3.subscribe((res: any) => {
      console.log(res);
      this.service.print(res, 'elContainer3');
    });
    //From-promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolve');
      }, 3000);
    });

    const obs4 = from(promise);
    obs4.subscribe((res: any) => {
      console.log(res);
      this.service.print(res, 'elContainer4');
       // this.service.print(res,'elContainer')
    });

    //string to obserable
    const obs5 = from("wellcome to string");
    obs5.subscribe((res: any) => {
      console.log(res);
      this.service.print(res, 'elContainer5');
       // this.service.print(res,'elContainer')
    });
  }
}
