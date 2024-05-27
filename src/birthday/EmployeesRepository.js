import fs from "fs";
import path from "path";
import { Employee } from "./Employee";

export class EmployeesRepository {
  constructor() {}

  getEmployeesFromFile(fileName) {
    const data = fs.readFileSync(
      path.resolve(__dirname, `${fileName}`),
      "UTF-8"
    );
    const lines = data.split(/\r?\n/);
    lines.shift();
    const employees = lines.map((line) => this.createEmployeeFromLine(line));
    return employees;
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

  getEmployeesByBirthDate(ourDate, fileName) {
    const employees = this.getEmployeesFromFile(fileName);
    return employees.filter((employee) => employee.isBirthday(ourDate));
  }
}
