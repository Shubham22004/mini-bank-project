import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import DepositWithdraw from './pages/DepositWithdraw';
import Accounts from './pages/Accounts';


export default function App() {
return (
<div className="app-container">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/create" element={<CreateAccount />} />
<Route path="/transaction" element={<DepositWithdraw />} />
<Route path="/accounts" element={<Accounts />} />
</Routes>
</div>
);
}