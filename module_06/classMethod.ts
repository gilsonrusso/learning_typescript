class Teacher {
    name: string;
    age: number;
    className: string;


    constructor(name: string, age: number, className: string) {
        this.name = name;
        this.age = age;
        this.className = className;
    }

    toPresentYourSelf(): void {
        console.log(`${this.name} is ${this.age} years old and is teacher of  ${this.className} classmate`);
    }

    totalNotes(...notes: number[]): number {
        return notes.reduce((acc, act) => acc + act, 0);
    }
}

const marcos = new Teacher('Marcos', 55, 'Math');

marcos.toPresentYourSelf();
console.log(marcos.totalNotes(7.5, 8.5, 5.0, 7.0));
