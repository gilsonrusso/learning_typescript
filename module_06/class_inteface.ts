interface IUser {
  name: string;
  mail: string;
  cellPhone: string;
  type: string;
}

interface INotificationV2 {
  sendMessage(user: IUser): boolean;
}

class Mail2 implements INotificationV2 {
  sendMessage(user: IUser): boolean {
    console.log(`Mail sent to ${user.mail}, by ${user.type}`);
    return true;
  }
}

class Sms2 implements INotificationV2 {
  sendMessage(user: IUser): boolean {
    console.log(`SMS sent to ${user.mail}, by ${user.type}`);
    return true;
  }
}

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

new Mail2().sendMessage(userEmail);
new Sms2().sendMessage(userSms);
