import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Button, Image } from "react-bootstrap"

const Settings = function () {
  return (
    <Container fluid className="bg-body mb-5">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center text-md-start border-secondary border-bottom mt-5 pb-3 mb-3">
              Account
            </h1>
          </Col>
        </Row>
        {/* MEMBER & ACCOUNT */}
        <Row>
          <Col
            md={4}
            className="text-center
            text-md-start
            mb-4
            ms-md-0
            text-uppercase
            text-secondarytext-uppercase
            text-secondary">
            {" "}
            <h5>Membership &amp; billing</h5>
            <Button
              variant="dark"
              className="px-4 shadow-sm rounded-0 border-bottom border-secondary border-opacity-50 border-1">
              Cancel Membership
            </Button>
          </Col>
          <Col sm={8} className="mb-3">
            {/* STUDENT */}
            <Row className="mb-3 border-secondary text-center text-sm-start border-bottom">
              <Col className="p-0" sm={6}>
                <p className="mb-2 fw-bold">student&#64;strive.school</p>
                <p className="mb-2 text-secondary">Password:*******</p>
                <p className="mb-2 text-secondary">Phone: 321 044 1279</p>
              </Col>
              <Col sm={6} className="text-center text-sm-end">
                <p className="mb-2 text-primary">Change account email</p>
                <p className="mb-2 text-primary">Change password</p>
                <p className="mb-2 text-primary">Change phone number</p>
              </Col>
            </Row>
            {/* PAY PAL & PAYMENT */}
            <Row className="mb-3 border-secondary border-bottom">
              <Col sm={6} className="text-center text-sm-start mb-2 mb-sm-0">
                <FontAwesomeIcon icon="fa-brands fa-paypal" />
              </Col>
              <Col className="p-0 text-center text-sm-end" sm={6}>
                <p className="mb-2 text-primary">Update payment info</p>
                <p className="mb-2 text-primary">Billing details</p>
              </Col>
            </Row>
            {/* REDEEM GIFT */}
            <Row>
              <Col className="p-0 text-center text-sm-end">
                <p className="mb-2 text-primary">Redeem gift card or promo code</p>
                <p className="mb-2 text-primary">Where to buy gitt cards</p>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* PLAN DETAILS */}
        <Row sm={3} className="py-3 mb-3 border-secondary border-top border-bottom">
          <Col className="p-0 text-center text-sm-start">
            <h5 className="text-uppercase text-secondary">plan details</h5>
          </Col>
          <Col>
            <span className="mb-2 fw-bold">Premium</span>
            <Image src="../public/icon-tag-4K.png" alt="4K icon" />
          </Col>
          <Col className="p-0 text-sm-end text-center text-primary">Change plan</Col>
        </Row>
        {/* SETTINGS ROW */}
        <Row className="border-bottom border-secondary pb-3 mb-4">
          <Col sm={6} md={4} className="p-0">
            <h5 className="text-uppercase text-center text-sm-start text-secondary">settings</h5>
          </Col>
          <Col sm={6} md={8} className="text-center text-sm-end text-md-start">
            <p className="mb-2 text-primary">Parental controls</p>
            <p className="mb-2 text-primary">Test participation</p>
            <p className="mb-2 text-primary">Manage download devices</p>
            <p className="mb-2 text-primary">Activate a device</p>
            <p className="mb-2 text-primary">Recent device streaming activity</p>
            <p className="mb-2 text-primary">Sign out of all devices</p>
          </Col>
        </Row>
        {/* PROFILE ROW */}
        <Row className="mb-3">
          <Col sm={4}>
            <h5 className="text-uppercase text-secondary">my profile</h5>
          </Col>
          <Col sm={8} md={4} className="text-sm-end p-0 text-center text-md-start mb-2 m-md-0">
            <Image style={{ width: "30px" }} src="../public/avatar.png" />
            <span className="fw-bold ms-3">Strive Student</span>
          </Col>
          <Col className="p-0 text-center text-sm-end">
            <p className="mb-2 text-primary">Manage profiles</p>
            <p className="mb-2 text-primary">Add profile email</p>
          </Col>
        </Row>
        {/* LANGUAGE ROW */}
        <Row>
          <Col md={4} className="offset-0 text-center text-sm-end text-md-start offset-md-4 p-0">
            <p className="mb-2 text-primary">Language</p>
            <p className="mb-2 text-primary">Playback settings</p>
            <p className="mb-2 text-primary">Subtitle appearance</p>
          </Col>
          <Col className="text-center text-sm-end text-md-start p-0">
            <p className="mb-2 text-primary">Viewing activity</p>
            <p className="mb-2 text-primary">Ratings</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Settings
