import { IDatabase } from "../interfaces/IDatabase";

export class Database {
  static LOCAL = "localhost";

  static TYPE_MYSQL = "MySql";
  static TYPE_POSTGRES = "Postgres";

  constructor(
    private _typeDataBase: string,
    private _username: string,
    private _password: string,
    private _ip: string
  ) {}

  static factory({ ip, password, typeDatabase, username }: IDatabase) {
    if (![Database.TYPE_MYSQL, Database.TYPE_POSTGRES].includes(typeDatabase)) {
      throw new Error("Type database to be a type valid");
    }
    return new Database(typeDatabase, username, password, ip);
  }
}
