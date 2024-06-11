import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHouse ,faCartShopping, faAddressBook , faShoePrints } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {
   return (
   <>
    <h2 style={{marginLeft:'610px', marginTop:'20px'}}><FontAwesomeIcon icon={faShoePrints} /> Designer</h2>
    <Router>
      <div className="container" >
        <nav className="navbar navbar-expand-lg navbar-grey bg-light">
          <ul className="navbar-nav" style={{gap:'30px'}}>
            <li className="nav-item" >
              <Link to="/" className="nav-link">
                <h5 style={{ display: 'flex', listStyleType: 'none', gap: '4px' }}><FontAwesomeIcon icon={faHouse} /> Home </h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                <h5 style={{ display: 'flex', listStyleType: 'none', gap: '4px' }}><FontAwesomeIcon icon={faCartShopping} />Shop</h5>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                <h5 style={{ display: 'flex', listStyleType: 'none', gap: '4px' }} > <FontAwesomeIcon icon={faAddressBook} />Contact</h5>
              </Link>
            </li>
          </ul>
          <h5 style={{marginLeft:'800px'}}>
             
            <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                < FontAwesomeIcon icon={faGear} style={{ alignItems: 'center' }}/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                 Settings
                </Dropdown.Item>
                 <Dropdown.Divider />
                  <Dropdown.Item href="/Shop">Log In</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Sign up</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">About</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
          </h5>
          
        </nav>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
    </>
  );
}

export default App;
  <h5 style={{marginLeft:'850px'}}>Settings <img src='https://icons8.com/icon/fTunWYINbQyB/settings' alt='' /></h5>
          