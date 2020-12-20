
const obj = {
    [Symbol('2')]: true,
    '02': true,
    '10': true,
    '01': true,
    '2': true,
    [Symbol('1')]: true
}

const key = []
for (const key in obj) {
    key.push(key)
}

console.log(key)// ["2","10", "02", "01"]
// 숫자인데 첫글자가 0이 아닌 경우 => 숫자로 인식
