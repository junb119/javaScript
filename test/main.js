const user = {
  name: 'heropy',
  age : 85,
  emails :[
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}

// localStorage.setItem('user', JSON.stringify(user) ) // 저장하기
// console.log(JSON.parse(localStorage.getItem('user'))) // 가져오기
// localStorage.removeItem('user') // 제거하기

// user의 데이터를 json으로 문자데이터화해서 localstorage에 key, value값으로 지정




console.log(JSON.parse(localStorage.getItem('user')))
/*
localstorage의 데이터를 받아와서 json.parse를 통해 객체화 시킨다음 콘솔에서 출력
*/





// localstorage의 데이터를 받아서 내용을 수정한다음 
// 다시 localstorage에 반영하기

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))\

// 쉽게 다루기 위한 패키지
// lowdb