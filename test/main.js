// 클래스(Class)
// 생성자 함수(prototype)

// ver1
let heropy ={
  firstName: 'Heropy',
  lastName:'Park',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
    // this는 heropy라는 객체를 가르킴. 파이썬의 self
  }
}
console.log(heropy.getFullName()) 

// 위와 같은 방법으로 객체를 여러개 생성할 수 있지만 효율적이지 않음
// 생성자 함수를 통해 이를 보완가능


// ver2
function User(first, last) {
  this.firstName = first
  this.lastName = last
      
}
heropy = new User('Heropy', 'Park!') // user = 생성자 함수. 객체 데이터 생성
let amy = new User('Amy', 'Clarke') // heropy, amy, neo = 인스턴스
let neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy)
console.log(neo)

// ver3
// 생성자 함수는 파스칼 케이스

function User(first, last) {
  this.firstName = first
  this.lastName = last
      
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

heropy = new User('Heropy', 'Park') 
amy = new User('Amy', 'Clarke')
neo = new User('Neo', 'Smith')

console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())

