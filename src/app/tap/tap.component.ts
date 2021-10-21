import { Component, OnInit } from '@angular/core';
import { interval, Subscriber, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  myColors: String='';
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    const source = interval(1500);
  
    //Ex:1
    const Arr = [
      'Sujata',
      'Amol',
      'Reyansh',
      'Radha',
      'Shreya',
      'Madhubala',
      'Rahul',
    ];
 
    let obsSubscription: Subscription;
     obsSubscription = source.pipe(
        tap(res=>{
          console.log('tap before=>'+res);
        if(res==4)
        {
          obsSubscription.unsubscribe();
        }
        }),
      map((res) => Arr[res]),
      tap(res=>{
        console.log('tap after=>'+res);
        
      })
      )
      .subscribe((res) => {
      console.log(res);
      this.service.print(res, 'e1container1');
    });

    //Ex:2

    const Colors = [
      'Red',
      'Green',
      'Yellow',
      'Blue',
      'Pink',
      'Grey',
      'Black',
    ];
 
    let obsSubscription1: Subscription;
     obsSubscription1 = source.pipe(
        tap(res=>{
          this.myColors=Colors[res];
          console.log('tap before=>'+res);
        if(res==4)
        {
          obsSubscription1.unsubscribe();
        }
        }),
      map((res) => Colors[res]),
      tap(res=>{
        console.log('tap after=>'+res);
        
      })
      )
      .subscribe((res) => {
      console.log(res);
      this.service.print(res, 'e1container2');
    });
  }
}
