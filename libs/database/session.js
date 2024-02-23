import MySQLStore from "express-mysql-session";

const options = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  createDatabaseTable: true,
  //   schema: {
  //     tableName: "sessions",
  //     columnNames: {
  //       session_id: "session_id",
  //       expires: "expires",
  //       data: "data",
  //     },
  //   },
};

const sessionStore = new MySQLStore(options);

sessionStore
  .onReady()
  .then(() => {
    // MySQL session store ready for use.
    console.log("MySQLStore ready");
  })
  .catch((error) => {
    // Something went wrong.
    console.error(error);
  });

export default sessionStore;
