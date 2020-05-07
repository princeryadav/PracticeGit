function f1(m,n){
    if(m>0 && n>0){
        return true;
    }
    return false;
}

function f2(a,b){
    if(f1(a,b)){
        let c= a+b;
        return c;
    }
    return undefined;
}

function f3(){
    let x=5;
    let y=9;
  console.log(f2(x,y));
}
f3();  