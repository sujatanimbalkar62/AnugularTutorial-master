import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-xcomp',
  templateUrl: './parent-xcomp.component.html',
  styleUrls: ['./parent-xcomp.component.css']
})
export class ParentXCompComponent implements OnInit {
  
  inputvariable="Hii I Am Your Parent"
  constructor() { }


  ngOnInit(): void {
  }
  getData(value:any)
  {
    console.log(value)
    alert(value);
  }

}
