// func03.js

function fff() {
    console.log(1);
    console.log(2);
    // return;
    // console.log(3);

    return 3;
}

let result = fff();

console.log(result);

const af = ()=>{    //화살표함수 arrow
    console.log(4);
    console.log(5);
    return 6;
}

console.log(af());

// const af2 = ()=>7;
const af2 = ()=>1+2+3+4;

//  () => 7;
//  () => { return 7; }

console.log(af2());


let z = 300;

if(true) {
    console.log(z);
}

function scope2(){
    console.log(z);
}

scope2();

ccc = 3000;
var ccc;

console.log(ccc);


check();
function check() {  //호이스팅 : 선언부를 위로 올려줌
    console.log('check');
}
check();


(function oneuse(){
    console.log('1회용 함수');
})();

// oneuse();