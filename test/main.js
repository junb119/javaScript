// lodash 유용한 메소드 사용법


import _ from 'lodash'

const usersA = [
	{ userId: '1', name:'heropy'},
	{ userId: '2', name:'Neo'}
]
const usersB= [
	{ userId: '1', name:'heropy'},
	{ userId: '3', name:'Amy'}
]

const usersC = usersA.concat(usersB)  // concat : 합치기
console.log('concat', usersC) 
/*
concat을 하면 

0 : { userId: '1', name:'heropy'},
1 : { userId: '2', name:'Neo'}
2 : { userId: '1', name:'heropy'},
3 : { userId: '3', name:'Amy'}
다 합쳐져서 중복되는 데이터 발생
*/



// lodash의 uniqBy 사용 

// uniqBy(대상 배열 , '구분할속성') : 인수로 사용된 배열 데이터의 중복값을 제외한 배열 반환
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

/*
0 : { userId: '1', name:'heropy'},
1 : { userId: '2', name:'Neo'}
2 : { userId: '3', name:'Amy'}
*/




// lodash의unionBy 사용
// 병합 전이라면 unionBy를 통해 중복없이 합치기 가능
// unionBy(병합할배열1, 병합할배열2, '구분할속성')
const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy',usersD)

/*
0 : { userId: '1', name:'heropy'},
1 : { userId: '2', name:'Neo'}
2 : { userId: '3', name:'Amy'}
*/