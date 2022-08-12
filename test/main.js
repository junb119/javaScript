// 구조 분해 할당(비구조화 할당)

const user = {
  name: 'heropy',
  age : 65,
  email :'emfowkd@naver.com'
  // address :'usa'
}

// user의 원소를 각각의 변수에 할당가능.
// 해당 원소가 없을시 기본값 지정 가능
const { name :heropy , age, email, address = 'korea' } = user
// name 이란 property를 heropy로 바꿔서 사용가능
// E.g, user.address


console.log(`사용자의 이름은 ${heropy} 입니다.`)
console.log(`${name}의 나이는 ${age}세 입니다.`)
console.log(`${name}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)

// 비 구조화 할당
const fruits = ['Apple', 'Banana', 'Cherry']
const [, , b] = fruits
console.log(b) // 'Cherry'
