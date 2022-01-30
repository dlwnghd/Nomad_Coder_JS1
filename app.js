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

// Objects
const player = {
    name: "nico",   // String
    points: 10,     // int
    fat: true       // boolean
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

// 재정의
player.fat = false;
console.log(player.fat);

// 추가
player.lastName = "potato"
console.log(player.lastName);

// 값 변경까지 가능ㄷㄷ
player.points = player.points + 15;
console.log(player.points);