// prototype 가 붙어있지 않은 메소드 -> 정적메소드(static mathod)
// 

/* Object.assign 메소드 (target, sources(1), sources(2)....)
 : 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용. 대상 객체를 반환
 Object 전역개체의 prototype으로 만들어져있는게 아니므로 일반적인 객체 데이터에는 사용할 수 없음
 ex)
  const userAge = { 
  }
  userAge.assign(target,source)  ==> 불가
  Object.assign(target,source) ==> 가능
*/

const userAge = {
  //  key: value
  name : 'Heropy',
  age : 85
}

const userEmail = {
  name :'Heropy',
  email : 'thesecond@gmail.com'
}

const target = Object.assign(userAge, userEmail) // userAge에 userEmail 내용을 합침
console.log('target :', target)
console.log('userAge :' , userAge)
console.log('target === userAge :' , target === userAge) // >>> true 

a = {k : 123}
b = {k : 123}
console.log(a === b) // >>> false 반환

  // target과 userAge는 객체데이터, 메모리에서 참조만 하는 참조형 데이터이기에 같은 곳을 바라봄으로 true가 나오고
  // a와 b는 메모리에 원시형 데이터 이기에 false가 나옴
  // 데이터 불변성 참조


const userAge2 = {
  //  key: value
  name : 'Heropy',
  age : 85
}

const userEmail2 = {
  name :'Heropy',
  email : 'thesecond@gmail.com'
}

const target2 = Object.assign({}, userAge2, userEmail2) 
// assign메소드를 이용해 두 데이터를 합친 새로운 데이터를 만들고싶다면 위와 같이 target 속성에 빈 데이터를 넣으면 됨.

console.log(target2)
console.log(userAge)
console.log(target === userAge) // false
