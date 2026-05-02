import { Container, Row } from "react-bootstrap"
import SliderTitle from "./SliderComponents/SliderTitle"
import SingleSlide from "./SliderComponents/SingleSlide"
import SliderButton from "./SliderComponents/SliderButton"
SliderButton

const SliderMedia = function (props) {
  console.log(props)
  return (
    <Container fluid className="px-5 my-5">
      <Row className="position-relative my-5 pb-3">
        <SliderTitle sliderTitle={props.title} />
        <Row
          xs={1}
          md={2}
          lg={3}
          xxl={5}
          className="p-0 smooth-carousel m-0 flex-nowrap overflow-scroll hiding-bar">
          {props.array_path.map((linkPoster) => {
            return (
              <SingleSlide
                key={linkPoster.id}
                uniqueId={linkPoster.id}
                slideLink={linkPoster.poster_path}
              />
            )
          })}

          <SliderButton arrowDirection="right" arrowPosition="end" />
          <SliderButton arrowDirection="left" arrowPosition="start" />
        </Row>
      </Row>
    </Container>
  )
}

export default SliderMedia
