let accounts = require("../../accounts");
const Account = require("../../database/models/Account");

exports.fetchAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const foundAccount = await Account.findById(req.params.accountId);
    if (foundAccount) {
      await Account.findByIdAndUpdate(foundAccount._id, req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "Account does not exist" });
  }
};

exports.deleteAccounts = async (req, res) => {
  try {
    const foundAccount = await Account.findById(req.params.accountId);
    if (foundAccount) {
      foundAccount.remove();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "Account does not exist" });
  }
};
