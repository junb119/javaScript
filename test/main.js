// 데이터 불변성(Immutability)

// 원시 데이터 : string,number, boolean, undefined, null
// 원시데이터는 메모리에 한번 올라가있으면 같은 데이터를 할당했을 때 새로운 메모리 주소로 지정하는게 아니라
// 먼저 지정된 메모리 주소를 다시 참조한다 ( = 같은 곳을 다시 바라본다 = 불변성)

let a = 1
let b = 4
console.log(a,b,a === b)
b = a
console.log(a,b,a === b)
a = 7
console.log(a,b,a === b)
c = 1
console.log(b,c,b === c)


