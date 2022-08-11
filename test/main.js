// keys 정적 메소드 : Object 데이터의 key값으로 배열을 만드는 메소드
// value 정적 메소드 : Object 데이터의 value값으로 배열을 만드는 메소드


const user = {
  name : 'Heropy',
  age : 85,
  email : 'thesecond@gmail.com'
}


// key값 반환
const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

/* Object의 property에 접근하는 방법
 1. user.email  
 2. user['email']
 */


// value값 반환
let values = keys.map(key => user[key])
console.log(values)  // >>> ['Heropy', 85, 'thesecond@gmail.com']