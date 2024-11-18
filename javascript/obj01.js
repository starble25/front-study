//obj01.js

let scores = [10, 30, 50, 40];

console.log(scores[3]);

//Run Code -> Ctrl + Alt + N


//object

//JSON : JavaScript Object Notation
//{ key : value }

let weather = '맑음';

console.log(weather);

let weatherInfo = {
                weather : '맑음',
                temp : 2,
                location : 'cheonan'
                };

console.log(weatherInfo.weather);
console.log(weatherInfo.temp);
console.log(weatherInfo.location);

// 점심식사정보   짜장면   5000   대천반점   천안시장내부
let lunch = {
    menu : "짜장면",
    price : 5000,
    shop : "대천반점",
    location : "천안시장내부"
};

//객체 , 배열
//    +   객체 : 배열
// 배열 : 객체

// [] : 배열 , {} : 객체

let shopInfo = {
    name : '대천반점',
    location : '천안시장내부',
    menu : ['짜장면', '짬뽕', '볶음밥']
};

console.log(shopInfo.location);
console.log(shopInfo.menu[1]);

let shopInfo2 = {
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        {
            name : '짜장면',
            price : 5000
        },
        {
            name : '짬뽕',
            price : 7000
        },
        {
            name : '볶음밥',
            price : 7000
        }
    ]
};

console.log(shopInfo2.menu);      // 메뉴배열 정보
console.log(shopInfo2.menu[2]);   // 메뉴배열[2] -> 볶음밥
console.log(shopInfo2.menu[2].price);   // 볶음밥 가격만

let shopInfo3 = {
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        {
            name : '짜장면',
            price : 5000,
            raw : ['춘장', '양파', '돼지고기']
        },
        {
            name : '짬뽕',
            price : 7000,
            raw : ['오징어', '면', '고춧가루']
        },
        {
            name : '볶음밥',
            price : 7000,
            raw : ['달걀', '당근', '감자']
        }
    ]
};

console.log(shopInfo3.menu[0].raw);     //짜장면 재료 출력
console.log(shopInfo3.menu[0].raw[1]);  //짜장면 재료 중에 양파만 출력


let shopList = [
{
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        {
            name : '짜장면',
            price : 5000,
            raw : ['춘장', '양파', '돼지고기']
        },
        {
            name : '짬뽕',
            price : 7000,
            raw : ['오징어', '면', '고춧가루']
        },
        {
            name : '볶음밥',
            price : 7000,
            raw : ['달걀', '당근', '감자']
        }
    ]
},
{
    name : '맘스터치',
    location : '천안길가에',
    menu : [
        {
            name : '싸이버거',
            price : 6000,
            raw : ['빵', '채소', '닭다리살']
        },
        {
            name : '휠렛',
            price : 7000,
            raw : ['빵', '채소', '닭가슴살']
        }
    ]
}
]
;

console.log(shopList[1].menu[1].price);     //휠렛버거의 가격
console.log(shopList[0].menu[2].raw);       //볶음밥의 메뉴들
console.log(shopList[1].menu[0].raw[2]);    //싸이버거에 닭다리살 재료
console.log(shopList[0].location);          //대천반점의 위치

