// // console.log(); = System.out.print();
// console.log(545454);    // 자동 완성이 되지는 않음
// console.log("ladida");    // 자동 완성이 되지는 않음

// // const : 내부에 저장된 값을 절대로 바꿀 수 없음
// // let : 내부에 저장된 값을 후에 바꿀 수 있음
// // 실수를 최대한 줄이고 업데이트 되어야 하는 값만 바꾸기 때문에
// // 처음에 선언할 시에는 const를 쓰고 후에 let을 쓰는 경우가 많음

// let a = 5;
// const b = 2;

// const myName = "한국어";    // UTF-8 지원?

// const veryLongVariableName = 0;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(myName);

// a = 3;
// // b = 2;  // const는 절대로 바뀔 수 없기 때문에 변경이 불가능하다

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// boolean
// ture = 1, false = 0 , null = nothing or empty
// const amIFat = null;
// let something;
// console.log(amIFat);
// console.log(something, amIFat); // 자동으로 띄어서 나옴

// // array(배열)

// const dayOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];
// console.log(dayOfWeek);

// const nonsense = [1,2,"hello",false,null,true,undefined,""];    // 배열 내의 데이터 타입이 서로 달라도 상관이 없음, object?
// console.log(nonsense);

// // Get Item from Array
// console.log(dayOfWeek[4]);  // 배열 4번에 있는 값을 출력

// // Add one more day to the array
// dayOfWeek.push("sun");  // 배열의 맨 뒤에 추가됨
// console.log(dayOfWeek);

// // Objects
// const player = {
//     name: "nico",   // String
//     points: 10,     // int
//     fat: true       // boolean
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// // 재정의
// player.fat = false;
// console.log(player.fat);

// // 추가
// player.lastName = "potato"
// console.log(player.lastName);

// // 값 변경까지 가능ㄷㄷ
// player.points = player.points + 15;
// console.log(player.points);

// funtion(java:메소드)

// function이 없다면
// console.log("Hello my name is Nico1");
// console.log("Hello my name is Nico2");
// console.log("Hello my name is Nico3");
// console.log("Hello my name is Nico4");
// console.log("Hello my name is Nico5");
// console.log("Hello my name is Nico6");
// console.log("Hello my name is Nico7");

// function sayHello(nameOfPerson, age){   // 어떤값이어도 상관이 없나?(int, char, String, double, long)
//     console.log("Hello my name is " + nameOfPerson + " " + age);
// }

// sayHello("nico1", 15);  // (argument)
// sayHello("nico2", 20);
// sayHello("nico3", 25);
// sayHello("nico4", 35);
// sayHello("nico5", 45);
// sayHello()  // undefined도 가능함 function(메소드)는 무조건 실행

// const player = {
//     name: "nico",
//     sayHello: function(otherPersonsName) {
//         console.log("hello! " + otherPersonsName + " nice to meet you")
//     },
// };

// player.sayHello("nico1");
// player.sayHello("nico2");

// // #Recap
// const toBuy = ["potato", "tomato", "pizza"];

// console.log(toBuy);
// toBuy[2] = "water";
// console.log(toBuy);
// toBuy.push("meat"); // push는 오직 맨 뒤에 추가가 가능
// console.log(toBuy);

// // 배열을 선언할 때는 ~타입의 ~객체 = {}과 같다
// const player = {
//     name: "nico",
//     age: 12,
// };

// console.log(player);
// console.log(player.name);
// player.sexy = "soon";
// console.log(player);

// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }

// plus(4,5);

// const calculator = {    // calculaotr라는 클래스는
//     plus: function(a, b){   // plus라는 메소드로 a와 b를 받음
//         return(a+b);   // a+b출력
//     },
//     minus: function(a, b){   // minus라는 메소드로 a와 b를 받음
//         return(a-b);   // a-b출력
//     },
//     mul: function(a, b){   // mul라는 메소드로 a와 b를 받음
//         return(a*b);   // a*b출력
//     },
//     devide: function(a, b){   // devides라는 메소드로 a와 b를 받음
//         return(a/b);   // a/b출력
//     },
//     power: function(a, b){   // power라는 메소드로 a와 b를 받음
//         return(a**b);   // a**b출력
//     },
// };

// calculator.plus(4,5);
// calculator.minus(4,5);
// calculator.mul(4,5);
// calculator.devide(4,5);
// calculator.power(4,5);

// console.log(calculator.plus(2,3));


// Returns
// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2; // return : 값을 돌려줌
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

// const calculator = {    // calculaotr라는 클래스는
//     plus: function(a, b){   // plus라는 메소드로 a와 b를 받음
//         return(a+b);   // a+b출력
//     },
//     minus: function(a, b){   // minus라는 메소드로 a와 b를 받음
//         return(a-b);   // a-b출력
//     },
//     times: function(a, b){   // mul라는 메소드로 a와 b를 받음
//         return(a*b);   // a*b출력
//     },
//     divide: function(a, b){   // devides라는 메소드로 a와 b를 받음
//         return(a/b);   // a/b출력
//     },
//     power: function(a, b){   // power라는 메소드로 a와 b를 받음
//         return(a**b);   // a**b출력
//     },
// };

// const plusResult = calculator.plus(2,3);
// const minusResult = calculator.minus(2,3);
// const timesResult = calculator.times(2,3);
// const divideResult = calculator.divide(2,3);

// console.log(plusResult);
// console.log(minusResult);
// console.log(timesResult);
// console.log(divideResult);


// Conditionals(조건문)
const age = parseInt(prompt("How old are you?")); // 사용자의 입력을 기다림

console.log(typeof age);
console.log(age);

