import { Database } from "./class/Database";

const connection = Database.factory({
  typeDatabase: Database.TYPE_MYSQL,
  username: "Admin",
  password: "102030",
  ip: Database.LOCAL,
});

console.log(connection);
