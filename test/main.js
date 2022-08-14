const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// 생성자 방식
const regexp = new RegExp('the', '') // 정규표현식 생성
const regexp2 = new RegExp('the', 'g') // 하나가 아닌 모든 문자 일치(global)
const regexp3 = new RegExp('the', 'gi') // 대소문자 구분 안함
console.log(str.match(regexp))
console.log(str.match(regexp2))
console.log(str.match(regexp3))

// 리터럴 방식
const regexp4 = /fox/gi
console.log(str.match(regexp4))

// 메소드

  // test : 찾는 정규표현식이 있는지
console.log(regexp4.test(str)) // true

  // replace : 찾은 정규표현식을 대체
console.log(str.replace(regexp4, 'AAA')) // 정규표현식을 'AAA'로 대체
console.log(str)
