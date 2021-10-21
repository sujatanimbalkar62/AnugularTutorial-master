import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
   promiseval:any
   del={
     Brand:'Dell',
     HardDisc:'2TB',
     Color:'Black'
   }
   hp={
    Brand:'Hp',
    HardDisc:'2TB',
    Color:'Silver'
  }
  notAva={
    brand:"Not available",
    status:'failed'
  }
  constructor() { }

  Dellavailable(){
    return true;
  }
  Hpavailable(){
    return false;
  }

  ngOnInit(): void {
    let buyLaptop=new Promise((resolve,reject)=>{
  // resolve('Promise is Resolve');
   //reject('Promise is Reject')
   if(this.Dellavailable())
   {
     resolve(this.del)
   }
   else if(this.Hpavailable())
   {
     resolve(this.hp)
   }
   else{
     reject(this.notAva)
   }
    })
      buyLaptop.then(res=>{
      console.log("then code=>",res)
      this.promiseval=res;
    }).catch((res)=>{
      console.log('catchcode=>',res)
      this.promiseval=res;;

    })
  }
 

}
