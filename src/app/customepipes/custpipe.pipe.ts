import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipe'
})
export class CustpipePipe implements PipeTransform {

  transform(value: string,gender:string): string {
    let firstname= value.split(" ");
    // for (var i = 0; i < firstname.length; i++) {
    //   initials = '${firstname[i]}';
    // }
   if(gender.toLowerCase()=='male')
   {
     return 'Mr. '+value  
    
   }
   else{
     return 'Miss. '+value;
   }//SA Miss.Sujata Aher
   //
  }

}
