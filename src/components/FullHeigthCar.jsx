import { Component } from "react"
import { Carousel, Container, Row, Col } from "react-bootstrap"
import MyButtonSlider from "./MyButtonSlider"

class FullHeigthCar extends Component {
  buttonClass = "fw-bold px-5 py-2 text-capitalize shadow-sm me-2 mb-2 rounded-2 border-00"

  render() {
    return (
      <Carousel
        className="vw-100 vh-100 position-absolute top-0"
        controls={false}
        indicators={false}>
        <Carousel.Item className="vw-100 vh-100 slide-1">
          <Container className="ms-md-5 ps-md-5">
            <Row className="position-absolute mt-5" style={{ bottom: "25%" }}>
              <Col className="mb-5 text-center text-md-start" xs={12} lg={6}>
                <img className="w-75" src="./public/fh-slider/django-logo.png" alt="django logo" />
              </Col>
              <Col xs={12} className="text-center text-md-start">
                <MyButtonSlider
                  btnClass={this.buttonClass}
                  variant="light"
                  icon="fa-solid fa-play"
                  text="Play"
                />
                <MyButtonSlider
                  btnClass={this.buttonClass}
                  variant="secondary"
                  icon="fa-solid fa-circle-info"
                  text="More Info"
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    )
  }
}
export default FullHeigthCar
