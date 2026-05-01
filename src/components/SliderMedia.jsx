import { Component } from "react"
import { Container, Row } from "react-bootstrap"
import SliderTitle from "./SliderComponents/SliderTitle"
import SingleSlide from "./SliderComponents/SingleSlide"
import SliderButton from "./SliderComponents/SliderButton"
SliderButton

class SliderMedia extends Component {
  render() {
    return (
      <Container fluid className="px-5 my-5">
        <Row className="position-relative my-5 pb-3">
          <SliderTitle sliderTitle="Trending Now" />
          <Row
            xs={1}
            md={2}
            lg={3}
            xxl={5}
            id="trending-carousel"
            className="p-0 smooth-carousel m-0 flex-nowrap overflow-scroll hiding-bar">
            <SingleSlide slideLink="https://placecats.com/400/250" />

            <SliderButton arrowDirection="right" arrowPosition="end" />
            <SliderButton arrowDirection="left" arrowPosition="start" />
          </Row>
        </Row>
      </Container>
    )
  }
}

export default SliderMedia

{
  /* row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-5  */
}
