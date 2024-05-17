import fs from "fs";
import path from "path";
import { Employee } from "../domain/Employee";

export class BirthdayService {
  constructor(greetingDelivery) {
    this.greetingDelivery = greetingDelivery;
  }

  sendGreetings(ourDate, fileName = "employee_data.txt") {
    const data = fs.readFileSync(
      path.resolve(__dirname, `../${fileName}`),
      "UTF-8"
    );
    // split the contents by new line
    const lines = data.split(/\r?\n/);
    lines.shift();
    const employees = lines
      .map((line) => this.createEmployeeFromLine(line))
      .filter((employee) => employee.isBirthday(ourDate));

    employees.forEach((employee) => {
      this.greetingDelivery.sendGreetingToEmployee(employee);
    });
  }

  createEmployeeFromLine(line) {
    const employeeData = line.split(", ");
    const employee = new Employee(
      employeeData[1],
      employeeData[0],
      employeeData[2],
      employeeData[3]
    );
    return employee;
  }
}
