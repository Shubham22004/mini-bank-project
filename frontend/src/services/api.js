const API_URL = 'http://localhost:3000/api/accounts';


export async function createAccount(account) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(account)
  });
  return res.json();
}


export async function getAccounts() {
  const res = await fetch(API_URL);
  return res.json();
}