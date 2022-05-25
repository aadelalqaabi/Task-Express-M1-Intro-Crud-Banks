let accounts = require("../../accounts");

exports.createAccount = (req, res) => {
  const id = accounts.length + 1;
  req.body.id = id;
  accounts.push(req.body);
  res.status(201).json(req.body);
};
exports.fetchAccounts = (req, res) => {
  res.json(accounts);
};

exports.updateAccount = (req, res) => {
  const account = accounts.find(
    (_account) => _account.id === +req.params.accountId
  );
  if (account) {
    for (const key in req.body) {
      account[key] = req.body[key];
    }
    res.status(200).json(account);
  } else {
    res.status(404).json({ message: "Account does not exist" });
  }
};

exports.deleteAccounts = (req, res) => {
  const account = accounts.find(
    (_account) => _account.id === +req.params.accountId
  );
  if (account) {
    accounts = accounts.filter(
      (_account) => _account.id !== +req.params.accountId
    );

    res.status(204).end();
  }
};
