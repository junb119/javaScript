// 형 변환(Type conversion)

a = 1
b ='1'

console.log(a == b) // 동등 연산자. 거의 안씀

// Truthy(참 같은 값)
// true, {}, [] ,1, 2, 'false', -12, '3.14'....

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if (NaN) {
  console.log(123)
}
