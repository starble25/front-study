//practice01.js

const personInfo = {
    name:"홍길동",
    age:25,
    phone:"010-1234-5678",
    engName:"John Smith",
    nickname:" 복습마왕 "
}

console.log('변경 전');
console.log(personInfo);

/*코딩부분*/
personInfo.phone = personInfo.phone.split('-');
personInfo.engName = personInfo.engName.toUpperCase();
personInfo.nickname = personInfo.nickname.trim();
//substring 글자 추출 (시작위치, 끝위치(포함x))     시작위치<= 범위 < 끝위치
//split 매개변수 문자 기준으로 문자열을 잘라서 배열로 변환
//toUpperCase 대문자로 변환
//trim 공백제거

console.log('변경 후');
console.log(personInfo);

// const personInfo2 = {
//     name:'홍길동',
//     age:25,
//     phone: personInfo.phone.split('-'),
//     engName: personInfo.engName.toUpperCase(),
//     nickname: personInfo.nickname.trim()
// }

// console.log('변경 후');
// console.log(personInfo2);
