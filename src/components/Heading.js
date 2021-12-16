// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Heading () {
    return (
        <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
        Reading Blog
        </Navbar.Brand>
  
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Genres">
            <NavDropdown.Item href="#genres/fiction">Fiction</NavDropdown.Item>
            <NavDropdown.Item href="products/nonfiction">Nonfiction</NavDropdown.Item>
            <NavDropdown.Item href="products/historical-fiction">Historical Fiction</NavDropdown.Item>
            <NavDropdown.Item href="products/mystery">Mystery</NavDropdown.Item>
            <NavDropdown.Item href="products/autobiography">Autobiography</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#products/promo">Book Of The Month</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Books">
            <NavDropdown.Item href="#genres/Force of Nature by Jane Harper">Force of Nature by Jane Harper</NavDropdown.Item>
            <NavDropdown.Item href="products/Every Last Lie by Mary Kubica">Every Last Lie by Mary Kubica</NavDropdown.Item>
            <NavDropdown.Item href="products/1984 by George Orwell">1984 by George Orwell</NavDropdown.Item>
            <NavDropdown.Item href="products/A Stranger In The House by Shari Lapena">A Stranger In The House by Shari Lapena</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#products/promo">More Books</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#monthly-newsletter">Monthly Newsletter</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Heading;