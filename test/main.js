// 가져오기

// main.js
import _ from 'lodash' // From'node_modules'!

// 이름이 없는 모듈 가져오기
// 가져올 때 이름을 아무렇게나 지정가능
import anyName from './getType' // getType.js

// 이름이 지정된 모듈 가져오기
import {random, user as heropy} from './getRandom' 
  // 1. 가져올 때 중괄호로 묶기
  // 2. 여러개를 가져올 수 있음
  // 3. 가져온 모듈의 이름을 as를 이용해 바꿀 수 있음
	// import * as R from './getRandom' : getRandom.js 에서 모든 모듈을 R이라는 이름으로 가져오기

console.log(_.camelCase('the hello world'))
console.log(getType([1,2,3]))
// console.log(getRandom(), getRandom())
console.log(random)
console.log(user)