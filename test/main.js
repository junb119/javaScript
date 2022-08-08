// .includes() 메소드 : 인수로 사용된 데이터 포함 여부 반환

let array1 = [1, 2, 3, 4, 5]
let array2 = ['apple', 'banana', 'cherry']

const a = array1.includes(3) // 포함 >>> true
console.log(a)
const b = array1.includes('vvd') // 포함X false
console.log(b)

// .push() : 배열 맨 뒤에 인수로 사용된 데이터 삽입
// .unshift() : 배열 맨 앞에 인수로 사용된 데이터 삽입
// 원본 수정주의

array1.push(5)  
console.log(array1)

array1.unshift(0)  // 
console.log(array1)

// .reverse() : 배열의 순서뒤집기
// 원본 수정주의

array1.reverse()
array2.reverse()

console.log(array1)
console.log(array2)

// .splice() : (해당 인덱스, 삭제할 개수, 삽입할 데이터)
// 원본 수정 주의

array1.splice(2,1) // 2, 1: index, 1개  : 해당 인덱스번호부터 1개 삭제
console.log(array1)
array1.splice(2,0,999) // 2,0,999 : 인덱스 2에서 하나도 지우지말고 999를 해당 인덱스에 끼워놓음
console.log(array1)
array1.splice(2,1,66) // 2,0,66 : 인덱스 2에서 1개를 지우고 66을 해당 인덱스에 끼워놓음
console.log(array1)