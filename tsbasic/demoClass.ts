
export class Information {
    private name:string;
    private age:number;
   constructor(a?:string,b?:number) {
    this.name = a;
    this.age = b;
    }

    information = () => {
        console.log(this.name);
        console.log(this.age);
    }


  }
 
  
  