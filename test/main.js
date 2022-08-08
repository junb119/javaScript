// 배열
let array1 = [5, 12, 0, 130, 44]
let array2 = ['apple', 'banana', 'cherry']

// find 함수 : 배열을 돌며 콜백 함수의 조건에 부합하는 첫번째 아이템 값을 반환
console.log(array1.find(element => element > 10))  // false, true false true true => 12

// length 속성 : 배열의 item 갯수 반환
console.log('item 갯수 :', array1.length) 

// concat 함수 : 배열을 병합하는 메소드, 원본데이터는 그대로
console.log('array1 + array2 :' , array1.concat(array2)) 

// .forEach 함수
// forEach 함수의 매개변수는 함수 사용(=콜백)
// 콜백 함수는 (요소, 인덱스, 배열)의 매개변수를 가짐
array2.forEach(function (element, index, array) {       
  console.log(element, index, array) })

// .map() 함수 : 콜백으로 배열의 요소와 인덱스를 새로운 배열로 '반환'(=return 사용)
let b = array2.map((element, index) => ({   
  id : index,   
  name: element 
}))
console.log(b)

// .filter() : 배열의 요소 중 콜백으로 정의된 조건에 맞는 값만 배열로 반환
b = array1.filter(number => number < 3)
console.log(b)
console.log(array1)