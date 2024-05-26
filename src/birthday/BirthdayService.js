import { EmployeesRepository } from "./EmployeesRepository";
import { Employee } from "./Employee";

export class BirthdayService {
  constructor() {
    this.employeesRepository = new EmployeesRepository();
  }

  sendGreetings(ourDate, fileName, smtpUrl, smtpPort, transport) {
    const employees = this.getEmployeesByBirthDate(ourDate, fileName);

    employees.forEach((employee) => {
      const message = {
        host: smtpUrl,
        port: smtpPort,
        from: "sender@here.com",
        to: [employee.getEmail()],
        subject: "Happy Birthday!",
        text: `Happy Birthday, dear ${employee.getFirstName()}!`,
      };
      transport.sendMail(message);
    });
  }

  getEmployeesByBirthDate(ourDate, fileName) {
    const employees = this.employeesRepository.getEmployeesFromFile(fileName);
    return employees.filter((employee) => employee.isBirthday(ourDate));
  }
}
