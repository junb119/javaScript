// 참조형 데이터 : Object, Array, Function
// 새로운 데이터를 만들 때마다 새로운 메모리 주소에 할당된다.(생긴 게 같아도 바라보는 곳이 다르다 = 가변성)

let a = { k : 1}
let b = { k : 1}
console.log(a,b,a === b) // {k: 1} , {k: 1} , false
a.k = 7
b = a // 같은 주소를 참조
console.log(a,b, a === b) // {k: 7} , {k: 7} , true
a.k = 2
console.log(a, b, a === b) // {k: 2} , {k: 2} , true
let c = b
console.log(a, b, c, a === c) // {k: 2} , {k: 2} , true
a.k = 9
console.log(a,b,c, a === c) // {k: 9}, {k: 9} , true
