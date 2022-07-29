// 화살표 함수
// () => {}  vs function () {}

const double = function(x) {
  return x * 2
}
console.log('double :', double(7))

// 익명함수이며 return문이 단순하면 축약가능
let doubleArrow = (x) => {
  return x * 2  
}

// 더 축약 가능(괄호,중괄호 삭제)
doubleArrow = x => x * 2  
console.log('doubleArrow', doubleArrow(7))

// 객체 데이터를 사용할 때는 소괄호로 한번 감싸고 리턴 가능
let doubleArrow2 = x => ({ name: 'Heropy'  }) 
console.log('doubleArrow2', doubleArrow2(7))
