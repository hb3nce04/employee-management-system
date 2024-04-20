import typeorm from "typeorm";

const User = new typeorm.EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      width: 5,
      type: "int",
      generated: true,
    },
    username: {
      type: "varchar",
      length: 25,
    },
    password: {
      type: "varchar",
      length: 72,
    },
    email: {
      type: "varchar",
    },
    phone_number: {
      type: "varchar",
      length: 12,
      nullable: true,
    },
    last_login: {
      type: "datetime",
      nullable: true,
    },
    created_at: {
      type: "datetime",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
});

const Employee = new typeorm.EntitySchema({
  name: "Employee",
  tableName: "employees",
  columns: {
    id: {
      primary: true,
      width: 5,
      type: "int",
      generated: true,
    },
    first_name: {
      type: "varchar",
      length: 20,
    },
    last_name: {
      type: "varchar",
      length: 20,
    },
    birth: {
      type: "date",
    },
    gender: {
      type: "boolean",
      default: false, // man
      nullable: true, // there is no need to add
    },
    civil_id: {
      type: "varchar",
      length: 10,
    },
    phone_number: {
      type: "varchar",
      length: 12,
    },
    address: {
      type: "varchar",
      length: 255,
    },
    created_at: {
      type: "datetime",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    Department: {
      target: "Department",
      type: "many-to-one",
      joinColumn: { name: "department_id" },
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    },
  },
});

const Department = new typeorm.EntitySchema({
  name: "Department",
  tableName: "departments",
  columns: {
    id: {
      primary: true,
      width: 5,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      length: 30,
      unique: true,
    },
  },
});

const Skills = new typeorm.EntitySchema({
  name: "Skills",
  tableName: "skills",
  columns: {
    id: {
      primary: true,
      width: 5,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      length: 16,
      nullable: false,
    },
  },
});

const WorkingHistory = new typeorm.EntitySchema({
  name: "WorkingHistory",
  tableName: "working_history",
  columns: {
    id: {
      primary: true,
      width: 5,
      type: "int",
      generated: true,
    },
    start: {
      type: "date",
      nullable: false,
    },
    end: {
      type: "date",
      nullable: false,
    },
  },
});

export { User, Employee, Department };
