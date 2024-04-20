import "dotenv/config";
import express from "express";
import morgan from "morgan";
import expressEjsLayouts from "express-ejs-layouts";
import cookieParser from "cookie-parser";
import methodOvrride from "method-override";
import flash from "express-flash";

import setSession from "./libs/session.js";
import { database } from "./libs/database/config.js";
import apiRoutes from "./routes/api/main.js";
import mainRoutes from "./routes/main.js";

const app = express();
const PORT = process.env.PORT || 3000;

database
  .initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(methodOvrride("method", ["POST", "GET"]));
setSession(app);
app.use(expressEjsLayouts);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(flash());

app.use("/api", apiRoutes);
app.use(mainRoutes);
