// json 문법 (javascript object Notation)
// 자바스크립트의 객체 표기법
// JSON 은 하나의 문자데이터 포맷, js로 해석되는 도중에 객체데이터 처럼 사용됨
// json 문자열은 큰따옴표("") 만 사용 가능
// 하나의 json파일은 하나의 데이터이므로 두 개의 데이터를 명시할 수 없다

import myData from './myData.json'

console.log(myData)

const user = {
  name: 'heropy',
  age: 85, 
  emails: [
    'emfowkd@gmail.com',
    'neo@zillinks.com'
  ]
}

console.log('user', user)

// JSON : 전역개체
// JSON.stringify() : json포맷으로(문자데이터로) 만들어줌
const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

// JSON.parse() js의 객체데이터로 만들어줌
const obj = JSON.parse(str)
console.log('obj', obj)
console.log(typeof obj)