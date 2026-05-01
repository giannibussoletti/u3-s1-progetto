import { Component } from "react"
import { Carousel } from "react-bootstrap"
import MyCarouselItem from "./fh-slider/MyCarouselItem"

class FullHeigthCar extends Component {
  buttonClass = "fw-bold px-5 py-2 text-capitalize shadow-sm me-2 mb-2 rounded-2 border-00"
  logoName = ["django", "knives-out", "frankenstein"]
  render() {
    return (
      <Carousel
        slide={true}
        className="vw-100 vh-100 position-absolute top-0"
        controls={false}
        indicators={false}>
        {this.logoName.map((logo, i) => {
          return (
            <Carousel.Item key={logo} className={"vw-100 vh-100 slide-" + (i + 1)} interval={4000}>
              <MyCarouselItem logoName={logo} />
            </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }
}
export default FullHeigthCar
