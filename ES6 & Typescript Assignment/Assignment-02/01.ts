class fibo {
  #previousNo = 1;
  #currentNo = 2;
  next() {
    return this.#previousNo + this.#currentNo;
  }
}
let fib = new fibo();
console.log(fib.next());


/*
Alternate

class fib{
  next(n: number)
  {
      let a = n * (1 + Math.sqrt(5)) / 2.0;
      return Math.round(a);
  }
   
  }
  let p =new fib();  
  console.log(p.next(5));

  */