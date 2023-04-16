class Register {
    name: string;
    birthday: string;

    constructor(name: string, birthday: string) {
        this.name = name;
        this.birthday = birthday;
    }
}


class Consumer extends Register {
    email: string;
    phone: string;

    constructor(name: string, birthday: string, email: string, phone: string) {
        super(name, birthday);
        this.email = email;
        this.phone = phone;
    }
}

const consumer = new Consumer('John', '1990-01-01', 'envkt@example.com', '1234567890');

console.log(consumer);
