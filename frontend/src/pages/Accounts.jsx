import { useEffect, useState } from 'react';


const API = 'http://localhost:3000/api/accounts';


export default function Accounts() {
const [accounts, setAccounts] = useState([]);


useEffect(() => {
fetch(API).then(res => res.json()).then(setAccounts);
}, []);


return (
<div className="card">
<h2>All Bank Accounts</h2>
<table>
<thead>
<tr>
<th>Account No</th>
<th>Holder</th>
<th>Balance</th>
<th>KYC</th>
</tr>
</thead>
<tbody>
{accounts.map(a => (
<tr key={a.accountNo}>
<td>{a.accountNo}</td>
<td>{a.holderName}</td>
<td>{a.balance}</td>
<td>{a.isKYCVerified ? 'Yes' : 'No'}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}