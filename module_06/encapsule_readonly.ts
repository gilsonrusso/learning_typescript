class User {
    readonly id: string = "123456789";
    name: string = "Gilson Russo";
    readonly register_at: Date = new Date("2023-01-15");
    protected pwd: string = "102030";
}

let newUser = new User();


console.log(newUser.id);
console.log(newUser.name);
console.log(newUser.register_at);

