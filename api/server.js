const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

const app = express();
const db = require("./db");
const sequelize = require("./db");
const router = require("./routes");
const passport = require("./db/passport");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  sessions({
    secret: "movieReview",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("servidor corriendo");
  });
});
