const accounts = new Map();


module.exports = {
  save(account) {
    accounts.set(account.accountNo, account);
    return account;
  },


  findById(accountNo) {
    return accounts.get(accountNo);
  },


  findAll() {
    return Array.from(accounts.values());
  }
};

