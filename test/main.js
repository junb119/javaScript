// find, findIndex , remove

import _ from 'lodash'

const users = [
	{ userId: '1', name:'heropy'},
	{ userId: '2', name:'Neo'},
  { userId: '3', name:'Amy'},
  { userId: '4', name:'Evan'},
  { userId: '5', name:'Lewis'}
]


// find(배열 , 찾을 객체 ) : 배열에서 특정 객체 찾기
const foundUser= _.find(users, {name: 'Amy'})
  // 데이터가 name:'Amy'인 객체를 찾겠다.
  // >>> {userId: '3', name: 'Amy'}


// findIndex(배열 , 찾을 객체 ) : 배열에서 특정 객체의 인덱스 찾기
const foundUserINdex = _.findIndex(users, {name : 'Amy'})
  // 데이터가 name:'Amy'인 객체의 인덱스를 찾겠다.
  // >>> 2
console.log(foundUser)
console.log(foundUserINdex)


// remove(배열 , 제거할 객체 ) : 배열에서 특정 객체를 삭제(원본에 반영)
_.remove(users, {name: 'heropy'})
  // 데이터가 name:'heropy'인 객체를 제거하겠다.
console.log(users)

/* 
>>>
  { userId: '2', name:'Neo'},
  { userId: '3', name:'Amy'},
  { userId: '4', name:'Evan'},
  { userId: '5', name:'Lewis'}
*/