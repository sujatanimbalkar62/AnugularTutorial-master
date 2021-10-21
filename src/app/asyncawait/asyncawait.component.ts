import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-asyncawait',
  templateUrl: './asyncawait.component.html',
  styleUrls: ['./asyncawait.component.css']
})
export class AsyncawaitComponent implements OnInit {

  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    console.log(".........Async/Await...................");

//async keyword with function always return a promise
//  async function getData()
// {
//   return 'Data Recived';
// }
// getData().then(console.log)
//console.log(".......................................................................")

//await is wating for promise will resolve and settled
let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve('Data recived')
    },3000)
})
async function getData()
{
  let responce= await promise
  console.log(responce)
 }
 getData()
//  this.service.print(responce,"elcontainer")
  }


}
