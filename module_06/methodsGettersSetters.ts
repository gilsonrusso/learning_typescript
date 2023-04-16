class Permission {
  id: number = new Date().getTime();
  constructor(private _name: string, private _level: number) {}

  get name(): string {
    return this._name.toUpperCase();
  }
  set name(value: string) {
    if (value.length < 5) {
      throw new Error("Name must be more than 5 characters");
    }
    this._name = value;
  }
}

const newPermission = new Permission("gil", 1);
console.log(newPermission.name);

newPermission.name = "max";
