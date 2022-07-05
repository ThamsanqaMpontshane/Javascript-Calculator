class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

let person1 = new Person("John", 30);
let person2 = new Person("Mary", 25);

console.log(person1.getName());