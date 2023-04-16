class Home {
    public color: string;
    public address: object;

    constructor(color: string, address: object) {
        this.color = color;
        this.address = address;
    }

    public knockTheDoor(): void {
        console.log('knoking the door');
    }

    protected openDoor(): void {
        console.log("Open door");
    }
}

class House extends Home {
    public enterHouse(): void {
        return this.openDoor();
    }
}


const newHouse = new House('Brown', { Address: "Street New", zip: "690000"});

newHouse.knockTheDoor();
newHouse.enterHouse();
