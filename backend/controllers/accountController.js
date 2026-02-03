
const service = require('../services/accountService');
const repository = require('../repositories/accountRepository');


exports.createAccount = (req, res) => {
  try {
    const account = service.createAccount(req.body);
    res.json(account);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


exports.getAllAccounts = (req, res) => {
  res.json(repository.findAll());
};


exports.deposit = (req, res) => {
  try {
    service.deposit(req.body.accountNo, req.body.amount);
    res.json({ message: 'Deposit successful' });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


exports.withdraw = (req, res) => {
  try {
    service.withdraw(req.body.accountNo, req.body.amount);
    res.json({ message: 'Withdrawal successful' });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


exports.transfer = (req, res) => {
  try {
    const { sender, receiver, amount } = req.body;
    service.transfer(sender, receiver, amount);
    res.json({ message: 'Transfer successful' });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};