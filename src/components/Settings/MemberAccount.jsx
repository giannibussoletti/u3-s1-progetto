import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Col, Row } from "react-bootstrap"
import SectionTitle from "./SectionTitle"
import ListGenerator from "./ListGenerator"

const studentFirstSection = ["student&#64;strive.school", "Password:*******", "Phone: 321 044 1279"]
const studentSecondSection = ["Change account email", "Change password", "Change phone number"]

const paymentFirstSection = ["Update payment info", "Billing details"]
const paymentSecondSection = ["Redeem gift card or promo code", "Where to buy gitt cards"]

const AccountMember = function () {
  return (
    <>
      <Col
        md={4}
        className="text-center
            text-md-start
            mb-4
            ms-md-0
            ">
        <SectionTitle sectionTitle="Membership &amp; billing" />
        <Button
          variant="dark"
          className="px-4 shadow-sm rounded-0 border-bottom border-secondary border-opacity-50 border-1">
          Cancel Membership
        </Button>
      </Col>
      <Col md={8} className="mb-3">
        {/* STUDENT */}
        <Row className="mb-3 border-secondary text-center text-sm-start border-bottom">
          <Col className="p-0" sm={6}>
            {studentFirstSection.map((listItem, i) => {
              return <ListGenerator key={listItem + i} ListItem={listItem} />
            })}
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            {studentSecondSection.map((listItem, i) => {
              return <ListGenerator key={listItem + i} ListItem={listItem} />
            })}
          </Col>
        </Row>
        {/* PAY PAL & PAYMENT */}
        <Row className="mb-3 border-secondary border-bottom">
          <Col sm={6} className="text-center text-sm-start mb-2 mb-sm-0">
            <FontAwesomeIcon icon="fa-brands fa-paypal" /> admin&#64;strive.school
          </Col>
          <Col className="p-0 text-center text-sm-end" sm={6}>
            {paymentFirstSection.map((listItem, i) => {
              return <ListGenerator key={listItem + i} ListItem={listItem} />
            })}
          </Col>
        </Row>
        {/* REDEEM GIFT */}
        <Row>
          <Col className="p-0 text-center text-sm-end">
            {paymentSecondSection.map((listItem, i) => {
              return <ListGenerator key={listItem + i} ListItem={listItem} />
            })}
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default AccountMember
