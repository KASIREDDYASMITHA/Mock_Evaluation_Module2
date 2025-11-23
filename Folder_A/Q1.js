//Q1. Spread Operator

let arr1 = [10, 20, 30];
let arr2 = [40, 50];
const combine=[...arr1,...arr2];
console.log(combine);


//Q2. Spread Operator (Object)


let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
const profile={...person,...extra};
console.log(profile);


//Q3. Rest Operator (Function Parameters)
function sumAll(...numbers)
{
    let sum=0;
    for(let num of numbers)
    {
        sum+=num;
    }
    return sum;
}
console.log(sumAll(1,2,3,4));


//Q4. Rest Operator (Array Destructuring)
let numbers = [10, 20, 30, 40, 50];
let[a,...remaining]=numbers;
console.log(a);
console.log(remaining);

//Q5. Nested Object Destructuring


let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let {
    address:{
        city,
        geo:{lat,lng}
    }

}=user;
console.log(city);
console.log(lat);
console.log(lng);

//Q6. Arrow Function

const multiply=(a,b )=>a*b;
console.log(multiply(3,4));


//Q7. Optional Chaining


let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
let role= emp?.details?.profile?.role;
console.log(role);