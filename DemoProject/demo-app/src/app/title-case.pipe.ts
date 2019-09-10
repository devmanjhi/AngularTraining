import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  
  transform(value:any,limit?:number) {
    var preposition = ["is"];
    if(!value) {
        return null;
    } else {
      let words= value.split(" ");
      let finalResult="";
      var i;
      for (i = 0; i < words.length; i++) {
        if(! preposition.includes(words[i]))
        finalResult+=words[i].charAt(0).toUpperCase()+words[i].slice(1)+ " ";    
        else
        finalResult+=words[i]+ " ";
      }
        return finalResult;
    } 
  }

}
