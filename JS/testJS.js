//let a = window.prompt('a = ', 10);
//let b = window.prompt('b = ', 2);
//
//let mul = (a, b)=>
//
//   return a*b;
//
//
//let div = (a,b)=>
//
//   if (b !==0) {
//       return a/b;
//   }
//   
//   else{
//       console.log('Error - 0');
//   }
//
//
//if (!isNaN(Number(a)) && !isNaN(Number(b))) 
//
//
//   a=Number(a);
//   b=Number(b);
//
//console.log(mul(a,b));
//console.log(div(a,b));
// else{
//   console.log('Error');
//}

//let random = Math.floor(Math.random()*(11));
//console.log(random);
//let c = window.prompt('c = ', 2);

//if (random ===Number(c))
//{
//console.log('Good work');
//} else
//{
    //console.log('No match');
//}

//console.log('Hello'.split(''));
//console.log(["H", "e", "l", "l", "o"].join(''));
//console.log('Hello'.split('').reverse().join(''))

//let a = 200;
//let b = (a++);
//a=Number(a);
//b=Number(b);
//    console.log('check number: ' (a));
//function hint (params) {
//    
//}

//var x = 0;
//while (x < 10) { // "x < 10" — это условие для цикла
//   // do stuff
//   x++;
//}
//console.log(x);

//console.log('Helloe'.replace('e','a'))

//let f = window.prompt('F = ', 10);
//
//if (!isNaN(Number(f)) >=0)
//{
//let c = (5 / 9) * (f - 32);
//console.log('C = ', c.toFixed(1))
//}else
//{
//    console.log('Error!')
//}

//--------------------------------------------task6

//let a = window.prompt('a = ', 10);
//let check = (num) =>{ return (a % 3 === 0 || a % 7 === 0) ? true : false };
//    if (a % 3 === 0 || a % 7 === 0)
//    {
//        return(true);
//    }else
//    {
//        return(false);
//    }
//}

//if (!isNaN(Number(a)))
//{
//    a = Number(a);
//    if (a >=0)
//    {
//        console.log(check(a));
//    }else
//{
//    console.log('Error!');
//}else{
//    console.log('Error!');
//}
//
//----------------------------------------------task7
//let str = 'Hello';
//let arr = str.split('');
//let first = arr[0];
//arr.push(first);
//arr.unshift(first);
//let newStr = arr.join('');
//
//console.log(newStr);

//-------------------------------------------task10

//let str = 'pylyp';
// let res = str.split('').reverse().join('') ===str ? true: false;
//
//console.log(res);

let arr = [1,2,3,4,5,6,7,8,9,66,55,32,59,0];
let oddEveArr = (arr) =>
{
    let odd = [];
    let even = [];

    for (let index = 0; index < arr.length; index++) {
        (arr[index] % 2 === 0) ? 
        even.push(arr[index]):
        odd.push(arr[index]);
    }
}

console.log('odd = ' , odd);
console.log('even = ' , even);

oddEveArr(arr);