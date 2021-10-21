import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName="Anup";
  @ViewChild('box') box!: ElementRef; 
  @ViewChild(Comp2Component)
  child!: Comp2Component;
  constructor() { }

  ngOnInit(): void {
  
    
  }
  ngAfterViewInit()
  {
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor="blue";
    //  this.box.nativeElement.innerHTML="this is modified string";
    console.log(this.child);
    
  }
  changeChildProperty()
  {
      this.child.userName="Sujata Nimbalkar"
  }
  calledChildMethod()
  {
   this.child.clickMe()
  }

}
