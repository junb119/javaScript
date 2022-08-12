// 전개 연산자 : 배열 데이터를 쉼표로 구분하는 각각의 아이템으로 나열

const fruits = ['apple', 'banana', 'cherry', 'orange']
console.log(fruits)
console.log(...fruits) // 전개 연산자
// = console.log('apple', 'banana', 'cherry')

function toObject(a,b,...c) { // 객체 데이터로 변환
  return {
    a: a,  // --> a,         변수와 속성의 이름이 같으면 하나로 축약할 수 있음
    b: b,  // --> b,
    c: c   // --> c      c는 rest parameter(나머지 매개변수)
  }  
}
console.log(toObject(...fruits))
