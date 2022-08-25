import { Container, Navbar, Offcanvas } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Logo from '../assests/Group 12.png'

function DashboardOffcanvas() {
    return (
        <Navbar bg="transparent" expand='md' className="mb-3">
            <Container fluid className="p-0">
                <div className='navbrand'>
                    <Link to='/' className='navbrandLink'>
                        <img src={Logo} alt='page logo'></img>
                        <h4>Lilies</h4>
                    </Link>
                </div>
                <Navbar.Toggle className="shadow-none text-white bg-transparent border-0" aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="p-0">
                        <ul className='links justify-content-end flex-grow-1 p-0'>
                            <li><Link className='link1' to='/'>Home</Link></li>
                            <li><Link className='link2' to='/login'>Login</Link></li>
                            <li><Link className='link3' to='/signup'>Sign Up</Link></li>
                        </ul>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    );
}

export default DashboardOffcanvas;