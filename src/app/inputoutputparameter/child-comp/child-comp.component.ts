import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() myinput: any;
  @Output() myoutput:EventEmitter<string>=new EventEmitter();
  outputString="Hii I am Your Child";

  constructor() { }

  ngOnInit(): void {
    console.log(this.myinput)
  }
  sendData()
  {
    this.myoutput.emit(this.outputString);
  }

}
