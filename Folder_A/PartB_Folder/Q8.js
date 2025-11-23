//Q8

let nums = [10, 3, 7, 20, 13, 2];


//Using map, create a new array of squares.
let squares=nums.map(n=>n*n);
console.log(squares);


//Using filter, keep only prime numbers.
let primes =nums.filter(n=>{
    if(n<2)
        return false;
    for(let i =2 ;i<=Math.sqrt(n);i++);
    {
        if(n%i===0)
            return false;
    }
    return true;
});
console.log(primes);


//Using reduce, find the sum of all elements.
let total=nums.reduce((acc,curr)=>acc+curr,0);
console.log(total);


//Using sort, arrange the elements in descending order.
let descending =nums.slice().sort((a,b)=>b-a);
console.log(descending);



