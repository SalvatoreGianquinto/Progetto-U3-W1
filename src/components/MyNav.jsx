import { Container, Nav, Navbar } from "react-bootstrap"
import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link, useLocation } from "react-router-dom"

const MyNav = function (props) {
  const location = useLocation()

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema}
      data-bs-theme={props.tema}
      className="navbar-expand-md"
    >
      <Container fluid>
        <img src="/netflix_logo.png" width="100"></img>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                location.pathname === "/tv-show"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/tv-show"
            >
              Tv Show
            </Link>
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
