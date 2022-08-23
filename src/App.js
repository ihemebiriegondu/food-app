import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Cart from './pages/Cart'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/css/app.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/orders' element={ <Orders /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    </Router>
  );
}

export default App;
