import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
            <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Link className="nav-link" to="/">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/locations">Locations</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/characters">Characters</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;