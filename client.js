// function f1(m,n){
//     if(m>0 && n>0){
//         return true;
//     }
//     return false;
// }

// function f2(a,b){
//     if(f1(a,b)){
//         let c= a+b;
//         return c;
//     }
//     return undefined;
// }

// function f3(){
//     let x=5;
//     let y=9;
//   console.log(f2(x,y));
// }
// f3();  // simple method invocation


// var arrayOne = [43, 52, 39, 78]

// const condition = (x)=>x > 40

// console.log('Every - greater than 40: '+arrayOne.every(condition));

// const even = (y) => y % 2 === 0
// console.log('For Some Values: '+arrayOne.some(even));
const a = 1; const b = 2; const c = 3;
 
(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;
    
    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8
      })()
    })()
  })()
})()
console.log(`a: ${a}, b: ${b}, c: ${c}`);