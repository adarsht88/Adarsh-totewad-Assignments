const printNames = function(...names){

    for(let i in names){
        console.log(names[i]);

    }
    
}

const names = ['Jake','Maddy','Somi'];
printNames(...names)