// Modify Public
// Modify Protected
// Modify Private
// Modify Readonly

class Vehicle {
    readonly color: string;
    // public color: string;
    // private color: string;

    constructor(color: string) {
        this.color = color;
    }

    public openDoor(): boolean {
        return true;
    }
}

const car = new Vehicle("Black");
// car.color = "White";

console.log(car.color);
console.log(car.openDoor());
