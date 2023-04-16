interface RegisterBase {
  readonly id: number;
  readonly created_at: Date;
  readonly updated_at: Date;
}

interface RegisterUser extends RegisterBase {
  name: string;
  mail: string;
  password: string;
}

interface RegisterCategory extends RegisterBase {
  name: string;
}

class BaseRegister<T> {
  create(data: T) {
    console.log("Creating new data");
    return data;
  }
  select(item: T): T {
    console.log(`Item selected ${item}`);
    return item;
  }
  read(item: T): T {
    console.log(`Item Read ${item}`);
    return item;
  }

  delete(item: T): T {
    console.log(`Item deleted ${item}`);
    return item;
  }
}

const newUser = new BaseRegister<RegisterUser>();
const resultUser = newUser.create({
  id: new Date().getTime(),
  created_at: new Date(),
  updated_at: new Date(),
  name: "John Doe",
  mail: "envkt@example.com",
  password: "123456",
});
console.log(resultUser);

const newCategory = new BaseRegister<RegisterCategory>();
const resultCategory = newCategory.create({
  id: new Date().getTime(),
  created_at: new Date(),
  updated_at: new Date(),
  name: "Sales",
});
console.log(resultCategory);
