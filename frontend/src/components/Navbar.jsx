import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav className="card" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
<Link to="/">Home</Link>
<Link to="/create">Create Account</Link>
<Link to="/transaction">Deposit / Withdraw</Link>
<Link to="/accounts">All Accounts</Link>
</nav>
);
}