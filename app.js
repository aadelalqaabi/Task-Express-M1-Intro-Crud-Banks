const express = require("express");
let accounts = require("./accounts");
const router = require("./apis/accounts/accounts.routes");
const port = 8001;
const app = express();
app.use(express.json());

app.use("/api/accounts", router);

app.listen(port, () => console.log(port));
