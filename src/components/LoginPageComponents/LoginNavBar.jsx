import { Navbar, Image, Col } from "react-bootstrap"

const LoginNavBar = function () {
  return (
    <Col>
      <Navbar>
        <Navbar.Brand style={{ height: "55px" }} className="me-auto me-lg-0">
          {/* <img className="h-100" /> */}
          <Image className="h-100" src="../public/netflix_logo.png" alt="Netflix Logo" />
        </Navbar.Brand>
      </Navbar>
    </Col>
  )
}
export default LoginNavBar
