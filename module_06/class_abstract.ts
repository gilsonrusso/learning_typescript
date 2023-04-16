import { Mail, Sms } from "./notifications/classes/NotificationsBy"; // named exports
import IUser from "./notifications/interfaces/IUser"; // export default interface

const userEmail: IUser = {
  name: "John Doe",
  mail: "upchh@example.com",
  cellPhone: "1234567890",
  type: "mail",
};

const userSms: IUser = {
  name: "John Doe",
  mail: "upchh@example.com",
  cellPhone: "1234567890",
  type: "sms",
};

new Mail().sendMessage(userEmail);
new Sms().sendMessage(userSms);
