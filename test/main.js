// arguments
// arguments 객체는 매개변수를 지정하지 않아도 함수 안에서 언제든지 사용 가능


function sum () {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(sum(7,3))
