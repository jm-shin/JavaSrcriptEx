//매개변수 기본값, 함수의 인자
// const f = function (x, y, z) {
//     x = x !== undefined? x : 3
//     y = typeof y !== "undefined"? y : 4
//     console.log(x,y)
// }
//
// f(undefined, undefined);

// const f = function (x = 4, y = 5, z = 6) {
//     console.log(x, y, z);
// }
//
// f( undefined, null, false);

//default parameter : undefined 혹은 누락된 파라미터에 대해서만 동작, let 선언과 동일한 효과.
const f = function (a = 1, b = 2, c = 3, d = 4, e = 5, f = 6) {
    console.log(a, b, c, d, e, f);
}

f(7, 0, "", false, null);

//함수도 가능하다.
const notValid = function () {
    console.error('notValid Called');
    return 10;
}
const sum = function (x, y = notValid()) {
    console.log(x + y);
}
sum(1, 2); //3
sum(1); //11

// 기본값으로 할당하고자 하는 값이 변수일 경우 주의.
let a = 10;
let b = 20;

function f2 (aa = a, b = b) {
    console.log(aa, b);
}
f2(1, 2);
// f2(1); // b is not defined.


//유사배열객체 (array-like object): 객체인데, 각 프로퍼티의 키가 인덱스이고, length라는 프로퍼티가 있는 객체.
//default parameter는 arguments에 영향을 주지 않는다.
const arrayLikeObject  = function (a = 1, b = 2, c = 3) {
    console.log(arguments); //유사배열객체 {0:1, 1:2, 2:3, length: 3, callee: ,}
    console.log(a, b, c);
  //const arg = Array.prototype.slice.call(arguments);
  //console.log(arg.pop());
}






