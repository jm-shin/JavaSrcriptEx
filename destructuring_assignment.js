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

//기본: _{추출할 프로퍼티명 : 할당하고자 하는 변수명}_
const iu = {
    name : '아이유',
    age : 25,
    gender : 'female'
}
const {
    name: n,
    age: a,
    gender: g
} = iu
console.log(n, a, g)

//default parameter와 연동
const phone = {
    name : 'iPhone',
    color : undefined
}

const {
    name: n,
    version: v = '6+',
    color: c = 'silver'
} = phone
console.log(n, v, c)

const {
    name,
    version = 'X',
    color = 'black'
} = phone
console.log(name, version, color)

//사용 예시
const deliveryProduct = {
    orderedDate: '2018-01-15',
    estimatedDate: '2018-01-20',
    status: '배송중',
    items: [
        {name: '사과', price: 1000, quantity: 3},
        {name: '배', price: 1500, quantity: 2},
        {name: '딸기', price: 2000, quantity: 4}
    ]
}

const {
    estimatedDate: esti,
    status,
    items: [ , ...products]
} = deliveryProduct
console.log(esti, status, products)

//
const getUrlParts = (url) => /^(https?):\/\/(\w{3,}\.[A-z.]{2,})(\/[a-z0-9]{1,}\/([a-z0-9\-.,]+))$/.exec(url)

const [ , protocol, host, , title] = getUrlParts('http://abc.com/es6/7-1.destructuring')
console.log(protocol, host, title)