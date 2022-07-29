// 즉시실행함수
// IIFE, Immediately-invoked Function Expression
const a = 7
function double() {
  console.log(a * 2)
}
double();  // 즉시 실행함수 쓸 경우 ;으로 구분이 필요함


// 굳이 이렇게 안하고 한번만 쓸거면


// 즉시실행함수 첫번째
// 익명함수를 소괄호로 묶은 다음 소괄호를 한번더 열고 닫으면
// 함수 선언과 호출을 일회성으로 사용가능
(function () {
  console.log(a * 2)
})();

// 즉시실행함수 두번째
// 함수를 묶는 소괄호 안에 소괄호를 한번 더 넣음
(function () {
  console.log(a * 2)
}())

// 위처럼 실행되고 더이상 쓰임이 없는 함수라면 즉시실행함수로 한번 실행하고 만다