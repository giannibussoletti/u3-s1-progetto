import { Col, Container, Row } from "react-bootstrap"
import MyButtonSlider from "./MyButtonCarousel"

const MyCarouselItem = function (props) {
  const buttonClass = "fw-bold px-5 py-2 text-capitalize shadow-sm me-2 mb-2 rounded-2 border-00"

  return (
    <Container
      fluid
      className="p-0 backdrop-fh-carousel vh-100 vw-100"
      style={{
        backgroundImage:
          "url(http://image.tmdb.org/t/p/" + "original" + props.infoMedia.backdrop_path + ")",
      }}>
      <Row className="position-absolute mt-5" style={{ bottom: "25%" }}>
        <Col className="mb-5 text-center text-md-start" xs={12} lg={6}>
          <img className="w-75" src="#" alt="django logo" />
        </Col>
        <Col xs={12} className="text-center text-md-start ms-md-5 ps-md-5">
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
