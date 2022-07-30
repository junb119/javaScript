// js 데이터
// // string

// indexof()
// 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스 반환
// 일치하는 값이 없으면 -1 반환
let str = 'hellow world'
console.log(str.indexOf('hero ') !== -1 )

// slice() : 문자열 일부 추출하면서 새로운 문자열 반환
console.log(str.slice(0, 5))

// replace()
console.log(str.replace('hel', 'vv'))

// match()
str = 'emfowkd@naver.com'
console.log(str.match(/.+(?=@)/)[0]) 

// trim()
str= '     hellow   '
console.log(str.trim()) // 앞뒤 공백 지우기