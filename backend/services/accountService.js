const Account = require('../models/Account');
const repository = require('../repositories/accountRepository');


module.exports = {
  

  createAccount(data) {
    const account = new Account(
      data.accountNo,
      data.holderName,
      data.balance,
      data.isKYCVerified
    );
    return repository.save(account);
  },


  deposit(accountNo, amount) {
    const acc = repository.findById(accountNo);
    if (!acc) throw new Error('Account not found');
    acc.balance += amount;
  },


  withdraw(accountNo, amount) {
    const acc = repository.findById(accountNo);
    if (!acc) throw new Error('Account not found');
    if (acc.balance < amount) throw new Error('Insufficient balance');
    acc.balance -= amount;
  },

  transfer(senderNo, receiverNo, amount) {
  const sender = repository.findById(senderNo);
  const receiver = repository.findById(receiverNo);


  if (!sender || !receiver)
  throw new Error('Invalid sender or receiver');


  if (!sender.isKYCVerified)
  throw new Error('Sender KYC not verified');


  if (sender.balance < amount)
  throw new Error('Insufficient balance');


  sender.balance -= amount;
  receiver.balance += amount;
  }
};