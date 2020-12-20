//1. 배열의 각 인자를 펼친 효과
const str = 'Hello!';
const splitArr = str.split('');
const restArr = [...str];
console.log(splitArr, restArr);

//2. 앞뒤로 다른 값들을 함께 사용할 수 도 있다.
const values = [3, 4, 5, 6, 7, 8];
const sum = function (...args) {
    return args.reduce(function (p, c) {
        return p + c
    })
}
console.log(sum(1, 2, ...values, 9, 10));

//3.iterable한 모든 데이터는 펼칠 수 있다.
const str = 'Hello!';
const splitArr = str.split('');
const restArr = [...str];
console.log(splitArr, restArr);

//4. push, unshift, concat 등의 기능을 대체할 수 있다.
let originalArr = [2, 3];
const preArr    = [-2, -1];
const sufArr    = [6, 7];

originalArr.unshift(1);
originalArr.push(4);
originalArr = [0, ...originalArr, 5];
console.log(originalArr);

const concatArr = preArr.concat(originalArr, sufArr);
const restArr = [...preArr, ...originalArr, ...sufArr];
console.log(concatArr, restArr);

//5. '새로운' 배열이다.
let originalArray = [1, 2];
let copiedArray = [...originalArray];
console.log(originalArray === copiedArray);

originalArray.push(3);
console.log(originalArray);
console.log(copiedArray);

//6. '얕은복사'만을 수행한다.
let originalArray = [{
    first: 'Hello,',
    second: 'World!'
}, {
    first: 'Welcome',
    second: 'ES6!'
}];
let copiedArray = [...originalArray];
console.log(originalArray[0].first);

copiedArray[0].first = "Hi,";
console.log(originalArray[0].first);