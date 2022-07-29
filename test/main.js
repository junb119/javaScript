//  타이머 함수
// setTimout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimerout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// setTimout(함수, 시간) : 일정 시간 후 함수 실행
const timer = setTimeout(() => {
  console.log('Heropy')
} , 3000 ) // 3초뒤 'Heropy' 출력

// clearTimerout() : 설정된 Timeout 함수를 종료
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
}) // 'h1'을 클릭하면 setTimeout 함수 종료

// setInterval(함수, 시간) : 시간 간격마다 함수 실행
const timer2 = setInterval(() => {
  console.log('Heropy')
} , 3000 ) // 3초마다 한번씩 'Heropy' 출력

// 'h1'을 클릭하면 timer 실행x
const h1El2 = document.querySelector('h1')
h1El2.addEventListener('click', () => {
  clearInterval(timer2)
})