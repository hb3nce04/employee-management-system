import { DataSource } from "typeorm";

import { User, Employee, Department } from "../database/entities.js";

var dataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: [User, Employee, Department],
});

const userRepository = dataSource.getRepository("User");
const employeeRepository = dataSource.getRepository("Employee");
const departmentRepository = dataSource.getRepository("Department");

export {
  dataSource as database,
  userRepository,
  employeeRepository,
  departmentRepository,
};
