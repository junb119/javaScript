// 이름이 지정되지 않은 모듈 내보내기

// getType.js
export default function(data) {
// = export default function getType(data) { 
    // export default 
      // 1. 기본통로로 빠져나감
      // 2. 데이터 하나만(모듈 하나만 작성가능) 내보낼 수 있음
  return Object.prototype.toString.call(data).slice(8,-1)
}