//tag 함수
const tag = function (strs, ...args) {
    return {strs: strs, args};
}

const res = tag `순서가 ${1}이렇게 ${2} \n\n`;
console.log(res);

// raw: 날것
const res1 = String.raw `순서가 ${1}이렇게 ${2}\n\n`;
console.log(res1);

console.log(`Hello\nWorld!`);
console.log(String.raw `Hello\nWorld!`);
console.log(String.raw `Hello
World!`);