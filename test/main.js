import _ from 'lodash'

// 깊은 복사
const user = {
  name: 'heropy',
  age: 85,
  emails: ['emfowkd@gmail.com']
}

const copyUser = _.cloneDeep(user) // lodash를 이용한 깊은 복사
console.log(copyUser === user)

user.age = 22
console.log('user', user) // age : 22
console.log('copyUser', copyUser) // age: 85

user.emails.push('neo@zill.com')
console.log(user.emails === copyUser.emails) // false
console.log('user', user)
console.log('copyUser', copyUser) 

