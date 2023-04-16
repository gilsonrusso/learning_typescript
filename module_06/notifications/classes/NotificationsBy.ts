import IUser from "../interfaces/IUser";
import { NotificationBase } from "./Notifications";

export class Mail extends NotificationBase {
  sendMessage(user: IUser): boolean {
    console.log(`Mail sent to ${user.mail}, by ${user.type}`);
    return true;
  }
}

export class Sms extends NotificationBase {
  sendMessage(user: IUser): boolean {
    console.log(`SMS sent to ${user.mail}, by ${user.type}`);
    return true;
  }
}
