// Реализуйте NotificationService, который будет
// являться EventEmitter'ом. Добавьте методы
// для отправки различных типов уведомлений
// (например, email, SMS, push-уведомления).
// Другие компоненты приложения могут
// подписываться на события уведомлений и
// выполнять соответствующие действия при
// получении уведомлений.

const EventEmitter = require("events");

class NotificationService extends EventEmitter {
    sendEmail(msg) {
        this.emit("email", msg);
    }
    sendSMS(msg) {
        this.emit("sms", msg);
    }
    sendPush(msg) {
        this.emit("push", msg);
    }
}

let notificationService = new NotificationService();
notificationService.on("email", (msg) => {
    console.log(`email: ${msg}`);
});
notificationService.on("sms", (msg) => {
    setTimeout(() => {
        console.log(`sms: ${msg}`);
    }, 1000);
});
notificationService.on("push", (msg) => {
    setTimeout(() => {
        console.log(`push: ${msg}`);
    }, 2000);
});
notificationService.sendEmail("Hello from email!");
notificationService.sendSMS("Hello from sms!");
notificationService.sendPush("Hello from push!");

// console.log(notificationService);
