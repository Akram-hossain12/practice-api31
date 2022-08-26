let address = 'dhaka,bangladesh';
const Name = 'akram hossain';

const education = {
    SSC : 2016,
    HSC : 2018,
    Gpa : 4.50,
    gpa: 3.83,
}

const dynamicString = `where are you from :${address}
what is your name: ${Name}
what is your result in SSC : ${education.Gpa}
what is the year of Hsc : ${education.HSC}`;
// console.log(dynamicString)

const myNumber = num => num/5;

// console.log(myNumber(45))
const myTwoNum = (num1,num2)=> {
    const num1Add = num1 + 2;
    const num2Add = num2 + 2;
    const multiply = num1Add * num2Add;
    return multiply;
}
// console.log(myTwoNum(12,24))

const myThreeNum = (a,b,c) => a*b*c;

// console.log(myThreeNum(12,24,12))

let someFriendsAge = [20, 21, 22, 21, 23, 25, 28, 35, 87, 65, 45, 89, 35, 90];

const multiplyByFive = someFriendsAge.map((n) => {return n*5});

// .filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

const oddNum = someFriendsAge.filter((a) => { return a % 2 !== 0}); 
// console.log(oddNum)
// console.log(multiplyByFive)

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// console.log(roots)

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

//   console.log(reformattedArray)

const objectArr = [
 
       {key :1, price:3000},
       {key:2, price:4000},
       {key:3, price:5000}
    
];
const FiveHunderdTaka = objectArr.find( ({price}) => price === 5000 );
// console.log(FiveHunderdTaka)

let food = ['mango','rice','pepper','pear'];
food.forEach(function(foodItem){ console.log('I want to eat '+foodItem);
});

const num5 = [ 45, 46, 76, 54, 34, 23, 32];
 num5.forEach(function(num){console.log(num-1);});

//  .map() executes the same code on every element in an array and returns a new array with the updated elements.

let cost = [100,400,300,700];
let newCost = cost.map(function(costItem){ return costItem / 10;
});
console.log(newCost);

const obj = {
    price1: 12,
    price2: 13,
    price3: 24
  };
  
  const {price1, price2, price3} = obj;

  const {three}= {price3};
  
  console.log (three)
  