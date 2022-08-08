let array1 = [1, 2, 3, 4, 5]
let array2 = ['apple', 'banana', 'cherry']

// .find() .findIndex() : 해당되는 값 반환

let a = array2.find(el => /^c/.test(el) // /^B/ : 대문자 B로 시작하는지
)                                        // 조건에 맞는 요소 반환
console.log(a) 
a = array2.findIndex(el => /^c/.test(el) // 조건에 맞는 인덱스 반환
)
console.log(a) 