// ES6 Classes
const heropy = {
  name: 'Heropy2',
  normal() { // = normal : function() {}
    console.log(this.name)
  },
  arrow : () => {
    console.log(this.name)
  }
}
heropy.normal()
heropy.arrow()