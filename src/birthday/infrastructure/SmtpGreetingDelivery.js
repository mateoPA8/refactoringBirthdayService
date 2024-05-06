//import { GreetingDelivery } from 'src/domain/GreetingDelivery';

import { Employee } from '../domain/Employee';

export class SmtpGreetingDelivery {
  constructor(smtpPort, smtpUrl, transport) {
    this.smtpPort = smtpPort;
    this.smtpUrl = smtpUrl;
    this.transport = transport;
  }

  sendGreetingToEmployee(employee) {
    const message = {
      host: this.smtpUrl,
      port: this.smtpPort,
      from: 'sender@here.com',
      to: [employee.getEmail()],
      subject: 'Happy Birthday!',
      text: `Happy Birthday, dear ${employee.getFirstName()}!`
    };
    this.transport.sendMail(message);
  }
}

/*export interface Transport {
  sendMail: (message: Message) => void;
}

export interface Message {
  host: string;
  port: number;
  from: string;
  to: string[];
  subject: string;
  text: string;
}*/
