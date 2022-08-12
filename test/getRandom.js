// 이름이 지정된 모듈 내보내기
// 여러 모듈을 작성해 내보낼 수 있음

// getRandom.js
export function random() {
  return Math.floor(Math.random() * 10)
}

// = export 
export const user = {
  name :'heropy',
  age: 85
}