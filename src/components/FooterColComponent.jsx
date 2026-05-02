import { Col } from "react-bootstrap"

const FooterColComponent = function (props) {
  return (
    <Col className="text-light text-opacity-75">
      {props.footerLinks.map((link, i) => (
        <p key={link + i}> {link}</p>
      ))}
    </Col>
  )
}
export default FooterColComponent
