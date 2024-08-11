
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  static Type(){
    console.log("I am an animal")
  }

  speaks(){
    console.log("I can speak and i am a " + this.name)
  }

  static age = 10
}


dog = new Animal("Dog",4);
cat = new Animal("Cat",4);
// console.log(dog)
// console.log(cat)
// Animal.Type()
// console.log(Animal.age)
cat.speaks()
dog.speaks()

