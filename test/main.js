// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// ver1 
const a = 7

double()  
const double =  function () {  // 함수 표현의 경우 함수 호출이 먼저 있으면 실행 되지 않음
  console.log(a*2)
};

// ver 2
double2()
function double2() {   // 함수 선언인 경우 함소 호출이 먼저 있어도 실행가능
  console.log(a*2)
}
