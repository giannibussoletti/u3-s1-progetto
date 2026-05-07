import { Col, Container, Row } from "react-bootstrap"
import MyButtonSlider from "./MyButtonCarousel"

const MyCarouselItem = function (props) {
  const buttonClass = "fw-bold px-5 py-2 text-capitalize shadow-sm me-2 mb-2 rounded-2 border-00"
  return (
    <Container className="ms-md-5 ps-md-5">
      <Row className="position-absolute mt-5" style={{ bottom: "25%" }}>
        <Col className="mb-5 text-center text-md-start" xs={12} lg={6}>
          <img
            className="w-75"
            src={"./fh-slider/" + props.logoName + "-logo.png"}
            alt="django logo"
          />
        </Col>
        <Col xs={12} className="text-center text-md-start">
          <MyButtonSlider
            btnClass={buttonClass}
            variant="light"
            icon="fa-solid fa-play"
            text="Play"
          />
          <MyButtonSlider
            btnClass={buttonClass}
            variant="secondary"
            icon="fa-solid fa-circle-info"
            text="More Info"
          />
        </Col>
      </Row>
    </Container>
  )
}
export default MyCarouselItem
