//  상속(확장)
class Vehicle {
  constructor (name , wheel) {
    this.name = name
    this.wheel = wheel
  }
} 
const myVehicle = new Vehicle('운송수단', 2) // Vehicle 객체 생성
console.log(myVehicle)

class Bicycle extends Vehicle { // Bicycle 클래스 정의 
  constructor(name, wheel) {
    super(name, wheel) // Vehicle 클래스 상속
  }
}

const myBicycle =  new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발',3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Cal extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license // Vehicle 클래스 상속 후 확장
  }
}

const myCar =  new Cal('벤츠', 4 , true)
const daughtersCar = new Cal('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar)