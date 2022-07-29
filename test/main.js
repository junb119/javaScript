// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy!')
    cb()
  }, 3000)
}
timeout(() => {  // 콜백함수 (timeout함수의 매개변수 cd로 들어감)
  console.log('Done!')
} )  


