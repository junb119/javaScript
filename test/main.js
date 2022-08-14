const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
// 플래그

console.log(str.match(/the/)) // 객체로 반환

console.log(str.match(/the/g)) // [the, the]

console.log(str.match(/the/gi)) // [the, The, the]

console.log(str.match(/\.$/gim)) // 각 줄마다 마침표 확인
// $: $의 앞에 단어로 해당하는 줄이 끝나는 부분을 찾음

console.log(
  str.match(/\bf\w{1,}\b/g) // f로 시작하는 단어 찾기
)

console.log(
  str.match(/\d{1,}/g) // 한개이상 숫자 배열
)


const h = `     the hello  world    !`
console.log(
  h.replace(/\s/g, '')
)  // 공백 제거


console.log(
  str.match(/.{1,}(?=@)/g)
) // @를 기준으로 앞쪽 일치 ( = id 찾기)

console.log(
  str.match(/(?<=@).{1,}/g)
) // @를 기준으로 뒤쪽 일치 (= 메일 주소 찾기)

