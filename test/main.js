// toFixed : 소수점 기준 자르기, String으로 반환

const pi = 3.14238927839123
console.log(pi)

const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)


// parseInt, parseFloat : 형변환

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)
console.log(float) 
console.log(typeof integer, typeof float)

const ll = 3.14238927839123
const dd = parseInt(pi.toFixed(2))
console.log(dd)

