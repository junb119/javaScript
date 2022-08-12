// 얕은 복사
const user = {
  name: 'heropy',
  age: 85,
  emails: ['emfowkd@gmail.com']
}


// const copyUser = Object.assingn({}, user ) // assign 정적메소드를 이용한 얕은 복사
const copyUser = {...user} // 전개 연산자를 이용한 얕은 복사
console.log(copyUser === user)

user.age == 22
console.log('user', user) // age : 22
console.log('copyUser', copyUser) // age: 85

user.emails.push('neo@zill.com') // user.emails = 배열데이터 = 참조형 데이터 = 같은 주소 참조
console.log(user.emails === copyUser.emails) // true
console.log('user', user)
console.log('copyUser', copyUser) 

