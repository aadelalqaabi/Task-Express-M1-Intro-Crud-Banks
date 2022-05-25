const express = require("express");
const router = express.Router();

const {
  createAccount,
  fetchAccounts,
  updateAccount,
  deleteAccounts,
} = require("./accounts.controllers");

router.get("/", fetchAccounts);

router.post("/", createAccount);

router.put("/:accountId", updateAccount);

router.delete("/:accountId", deleteAccounts);

module.exports = router;
