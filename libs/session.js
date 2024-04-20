import MySQLStore from "express-mysql-session";
import session from "express-session";

const options = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
};

const Store = MySQLStore(session);
const sessionStore = new Store(options);

export default (app) => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.ENVIRONMENT !== "development",
        maxAge: 7 * 24 * 60 * 60,
      },
      store: sessionStore,
    })
  );
};
