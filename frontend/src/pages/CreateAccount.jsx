import { useState } from 'react';


const API = 'http://localhost:3000/api/accounts';


export default function CreateAccount() {
const [form, setForm] = useState({ accountNo: '', holderName: '', balance: '', isKYCVerified: true });
const [msg, setMsg] = useState('');


const submit = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form, balance: Number(form.balance) })
  });
  const data = await res.json();
  setMsg(data.error || 'Account created successfully');
};

return (
  <div className="card">
    <h2>Create Account</h2>
      <input placeholder="Account No" onChange={e => setForm({ ...form, accountNo: e.target.value })} />
      <input placeholder="Holder Name" onChange={e => setForm({ ...form, holderName: e.target.value })} />
      <input type="number" placeholder="Initial Balance" onChange={e => setForm({ ...form, balance: e.target.value })} />
      <select onChange={e => setForm({ ...form, isKYCVerified: e.target.value === 'true' })}>
        <option value="true">KYC Verified</option>
        <option value="false">KYC Not Verified</option>
      </select>
      <button onClick={submit}>Create Account</button>
      {msg && <div className="message">{msg}</div>}
  </div>
  );
}