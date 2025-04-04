// Import immagini (se sono nella cartella src/)
import { Container, Nav, Navbar } from "react-bootstrap"
import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"
// gli import dei componenti vanno inclusi nel file dove vengono adoperati!

const MyNav = function (props) {
  // dentro props c'è la proprietà "tema"
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema} // "light" o "dark"
      data-bs-theme={props.tema} // "light" o "dark"
      className="navbar-expand-md"
    >
      <Container fluid>
        <img src="/netflix_logo.png" width="100"></img>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Tv Show</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          {/*sezione per far scomparire img e icone in xs e md e farle comparire dentro Navbar.Toggle*/}
          <div className="d-flex align-items-center d-md-none">
            <i className="bi bi-search text-white"></i>
            <a href="#" className="mx-3">
              KIDS
            </a>
            <i className="bi bi-bell-fill text-white"></i>
            <img src="/avatar.png" width="40" className=" mx-3"></img>
          </div>
        </Navbar.Collapse>
        {/*sezione per far comparire img e icone in lg*/}
        <div className="d-none d-md-flex align-items-center">
          <i className="bi bi-search text-white"></i>
          <a href="#" className="mx-3 text-white">
            KIDS
          </a>
          <i className="bi bi-bell-fill text-white"></i>
          <img src="/avatar.png" width="40" className="mx-3" alt="Avatar" />
        </div>
      </Container>
    </Navbar>
  )
}

export default MyNav
