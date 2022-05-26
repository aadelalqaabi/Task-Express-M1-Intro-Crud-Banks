const express = require("express");
let accounts = require("./accounts");
const router = require("./apis/accounts/accounts.routes");
const connectDB = require("./database/connection");
const port = 8001;
const app = express();
app.use(express.json());

app.use("/api/accounts", router);

connectDB();

app.listen(port, () => console.log(port));
