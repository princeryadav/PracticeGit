// Checking input value 
// is positive number.
function f1(m,n){
    if(m>0 && n>0){
        return true;
    }
    return false;
}
// Add input value and
// return result
function f2(a,b){
    if(f1(a,b)){
        let c= a+b;
        return c;
    }
    return undefined;
}
// Printing return value 
// of f2 function
function f3(){
    let x=5;
    let y=9;
  console.log(f2(x,y));
}
// Invoking function f3
f3();  