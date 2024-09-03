class Person {
  _name: string;
  _age: number;
  
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  great() {
    console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`);
  }
}

const person = new Person('Faqih', 17);
person.great();