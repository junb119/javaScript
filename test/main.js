// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

// ver1
const heropy = {
  name : 'Heropy',
  normal : function (){
    console.log(this.name) // name : 'Heropy'
  },
  arrow : () => {
        console.log(this.name) // name : undefined
  }
}
heropy.normal()
heropy.arrow()

// ver2
const amy = {
  name : 'Amy',
  normal : heropy.normal, // 'Heropy'
  arrow: heropy.arrow // undifined
}
amy.normal()
amy.arrow()

// ver3
let time = {
  name : 'Heropy!!!!',
  timeout : function() {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
time.timeout()
