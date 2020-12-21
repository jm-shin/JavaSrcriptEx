//destructuring assignment (해체할당, 구조분해할당, 디스트럭처링)

//배열 해체할당. 사용법
var colors = ['red', 'white', 'orange']
var first = colors[0]
var second = colors[1]
var third = colors[2]
console.log(first, second, third)

const colors = ['red', 'white', 'orange']
const [first, second, third] = colors
console.log(first, second, third)

const colors = ['red', 'white', 'orange']
const [ , , third, fourth] = colors
console.log(third)