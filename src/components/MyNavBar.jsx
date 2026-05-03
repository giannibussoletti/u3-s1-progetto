import { Container, Nav, Navbar, Dropdown, NavItem, NavLink } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavBarElement from "./Home/NavBarElement"

const MyNavBar = function () {
  const menuObj = {
    menu: ["Home", "Tv Show", "Movies", "Recently Added", "My List"],
    class: "text-white text-decoration-none opacity-75",
  }

  return (
    <Navbar expand="lg" className="p-0 z-3" data-bs-theme="dark">
      <Container fluid className="bg-black bg-opacity-50 text-white position-relative">
        {/* Menu Hamburger solo da mobile */}
        <Dropdown as={NavItem} className="flex-grow-0  d-flex d-lg-none">
          <Dropdown.Toggle as={NavLink}>
            <FontAwesomeIcon icon="fa-solid fa-bars" style={{ color: "#e2e5e9" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{ top: "100%" }}
            className="bg-black rounded-0 border-light border-1">
            {menuObj.menu.map((link) => {
              return (
                <NavBarElement
                  key={link}
                  buttonName={link}
                  classObj={menuObj.class}
                  typeOf={Dropdown.Item}
                />
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
        {/* Logo Netflix */}
        <Navbar.Brand style={{ height: "55px" }} className="me-auto me-lg-0">
          <img className="h-100" src="../public/netflix_logo.png" alt="Netflix Logo" />
        </Navbar.Brand>

        {/* Menu Tablet / Desktop */}
        <Nav className="d-none d-lg-flex me-auto">
          {menuObj.menu.map((link) => {
            return (
              <NavBarElement
                key={link}
                buttonName={link}
                classObj={menuObj.class}
                typeOf={Nav.Link}
              />
            )
          })}
        </Nav>
        {/* Menu Destra */}
        <Nav className=" flex-row align-items-center">
          <Nav.Link className=" p-2">
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              style={{ color: "rgb(255, 255, 255)" }}
            />
          </Nav.Link>
          <Nav.Link className={menuObj.class + " p-2 d-none d-sm-inline-block"}>KIDS</Nav.Link>
          <Nav.Link className=" p-2">
            <FontAwesomeIcon icon="fa-solid fa-bell" style={{ color: "rgb(255, 255, 255)" }} />
          </Nav.Link>
          <Nav.Link style={{ height: "55px" }} className=" p-2">
            <img className="h-100" src="../public/avatar.png" alt="" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavBar
