interface Printable {
    print():void;
  }
  
  let circle: Printable = { 
    print(){
      console.log("Hi, I am Circle.");
    }
  };
  
  let employee: Printable = { 
    print(){
      console.log("Hi, I am employee.");
    }
  };
  
  function printall(circle:any,employee:any){
    circle.print();
    employee.print(); 
  }
  
  printall(circle,employee);



  /*
  with properties

  interface Printable { 
    firstName:string, 
    lastName:string, 
    print: ()=>string 
 } 
 
 var circle:Printable = { 
    print: ():string =>{return "Hi, you are a circle!!!"} 
 }
 
 var employee:Printable = { 
    firstName:"Jake",
    lastName:"Node", 
    print: ():string =>{return "Hello, you are an employee!!!"} 
 } 

 function printAll(employee: {firstName, lastName, print}, circle: {print}){
    console.log(employee.print());
    console.log(circle.print());
 }

 printAll({ 
    firstName:"Jake",
    lastName:"Node", 
    print: ():string =>{return "Hello, you are an employee!!!"} 
 } ,{ 
    print: ():string =>{return "Hi, you are a circle!!!"} 
 });

 */