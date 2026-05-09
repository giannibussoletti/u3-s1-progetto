import { Component } from "react"
import { Carousel } from "react-bootstrap"
import MyCarouselItem from "./fh-slider/MyCarouselItem"

class FullHeigthCar extends Component {
  buttonClass = "fw-bold px-5 py-2 text-capitalize shadow-sm me-2 mb-2 rounded-2 border-00"
  render() {
    return (
      <div className="vh-100">
        <Carousel
          slide={true}
          className="vw-100 vh-100 position-absolute top-0"
          controls={false}
          indicators={false}>
          {this.props.fhCarouselArray.slice(0, 5).map((media, i) => {
            return (
              <Carousel.Item key={i} className="vw-100 vh-100" interval={4000}>
                <MyCarouselItem infoMedia={media} />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    )
  }
}
export default FullHeigthCar
