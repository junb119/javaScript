// 반복문 (for statement)
// for (시작 조건; 종료 조건; 변화조건) {}

// for (let i = 0; i < 3; 1 ){
//    console.log(i)
// }

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1){
  const li = document.createElement('li') // createElement : 메모리상에 li 태그 생성
  li.textContent = `list-${i + 1}`
  if ( (i + 1 ) % 2 === 0) { // i가 짝수인 경우에만
    li.addEventListener('click', function(){
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li) // ul태그에 li태그 삽입