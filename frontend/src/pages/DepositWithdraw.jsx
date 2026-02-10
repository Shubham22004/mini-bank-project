import { useState } from 'react';


const API = 'http://localhost:3000/api/accounts';


export default function DepositWithdraw() {
const [accountNo, setAccountNo] = useState('');
const [amount, setAmount] = useState('');
const [msg, setMsg] = useState('');


const deposit = async () => {
  await fetch(`${API}/deposit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ accountNo, amount: Number(amount) })
  });
  setMsg('Deposit successful');
};

const withdraw = async () => {
  const res = await fetch(`${API}/withdraw`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ accountNo, amount: Number(amount) })
  });
  const data = await res.json();
  setMsg(data.error || 'Withdrawal successful');
};


  return (
    <div className="card">
      <h2>Deposit / Withdraw</h2>
      <input placeholder="Account No" onChange={e => setAccountNo(e.target.value)} />
      <input type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw} style={{ marginTop: '10px' }}>Withdraw</button>
      {msg && <div className="message">{msg}</div>}
    </div>
  );
}