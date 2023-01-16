const express=require('express')
const app=express()
const server=require('./server')
const PORT=process.env.PORT||5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("dotenv").config();
require('./passport/googlestrategy')
// Router
const userRouter = require("./routes/users.route");
const sessionRouter = require("./routes/session.route");
app.set('view engine',"ejs")
// server and db connection
server.initserver()

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//implementing cors
app.use(cors({ origin: true, credentials: true }));
// app.use(cors())
app.use(express.json());
app.use(passport.initialize());

// routes
app.listen(PORT,console.log(`server is running${PORT}`));
app.get("/", (req, res) => res.render("pages/index"));
app.use("/users/", userRouter);
app.use("/user/session/", sessionRouter);
