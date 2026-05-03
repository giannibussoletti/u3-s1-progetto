import FooterColComponent from "./components/FooterColComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Component } from "react"
import { Col, Container, Row, Button } from "react-bootstrap"

// FONTAWESOME IMPORT
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)

class Footer extends Component {
  state = {
    footerIcon: ["facebook", "instagram", "twitter", "youtube"],
    firstColFooter: ["Audio and Subtitles", "Media Center", "Privacy", "Contact Us"],
    secondColFooter: ["Audio Dcscription", "Investor Relations", "Legal Notices"],
    thirdColFooter: ["Help Center", "Jobs", "Cookie Preferences"],
    fourthColFooter: ["Gift Cards", "Terms of Use", "Corporate Information"],
  }

  render() {
    return (
      <Container>
        <Row className="text-center text-md-start" xs={1} sm={2} md={4}>
          <Col className="w-100 my-5">
            {this.state.footerIcon.map((icon) => (
              <FontAwesomeIcon
                size="2xl"
                className="me-3"
                icon={"fa-2x fa-brands fa-" + icon}
                style={{ color: "#808080" }}
                key={"fa-2x fa-brands fa-square-" + icon}
              />
            ))}
          </Col>
          <FooterColComponent footerLinks={this.state.firstColFooter} />
          <FooterColComponent footerLinks={this.state.secondColFooter} />
          <FooterColComponent footerLinks={this.state.thirdColFooter} />
          <FooterColComponent footerLinks={this.state.fourthColFooter} />
        </Row>

        <Row xs={1} className="text-center text-md-start">
          <Col className="mt-4">
            <Button variant="outline-secondary" className="rounded-0 border-2 border-secondary">
              Service Code
            </Button>
          </Col>
          <Col className="pt-4 text-light text-opacity-75">
            <p>&#169; 1997-2019 Netflix, inc.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer
