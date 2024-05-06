//import { Message, Transport } from '../SmtpGreetingDelivery';

export class InMemoryTransport {
  //let messagesSent = new ArrayList();
  constructor() {
    this.messagesSent = [];
  }
  sendMail(message) {
    //this.messagesSent = [...this.messagesSent, message];
    this.messagesSent.push(message);
  }
}
