import IUser from "../interfaces/IUser";

export abstract class NotificationBase {
  abstract sendMessage(user: IUser): boolean;
}
