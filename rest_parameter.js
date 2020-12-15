//rest parameter, 나머지 파라미터
function f (x, y, ...z) { //매개변수. 파라미터
    console.log(z);
}
f(1, 2, true, null, undefined, 10);