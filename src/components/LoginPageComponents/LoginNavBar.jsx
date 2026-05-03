import { Navbar, Image, Col, Container, Row } from "react-bootstrap"

const LoginNavBar = function () {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar>
            <Navbar.Brand style={{ height: "55px" }} className="me-auto me-lg-0">
              <Image className="h-100" src="../public/netflix_logo.png" alt="Netflix Logo" />
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}
export default LoginNavBar
