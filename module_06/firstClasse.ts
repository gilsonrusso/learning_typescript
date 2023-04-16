class Person {
    name: string;
    age: string;
    height: number;

    constructor(name: string, age: string, height: number) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    toString() {
        return `The Person ${this.name} are ${this.age} has height ${this.height}`;
    }
}

const max = new Person("Max", "36", 1.78);
const mary = new Person("Mary", "25", 1.80);


console.log("Person:", max);
console.log(mary.name);
