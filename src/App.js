import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Logo from '../src/assests/Group 12.png'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'

import menuIcon from './assests/icons8-menu-24.png'

import '../src/css/app.css'


function App() {
  return (
    <Router>
      <div className='mainNav'>
        <nav>
          <div className='navbrand'>
            <Link to='/' className='navbrandLink'>
              <img src={Logo} alt='page logo'></img>
              <h4>Lilies</h4>
            </Link>
          </div>

          <ul className='links'>
            <li><Link className='link1' to='/'>Home</Link></li>
            <li><Link className='link2' to='/login'>Login</Link></li>
            <li><Link className='link3' to='/signup'>Sign Up</Link></li>
          </ul>

          <div className='menu-icon-container'>
            <img src={menuIcon} alt='menu icon' />
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
