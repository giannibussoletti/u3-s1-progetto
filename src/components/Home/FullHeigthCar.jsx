import { Carousel } from "react-bootstrap"
import MyCarouselItem from "./fh-slider/MyCarouselItem"

const FullHeigthCar = function (props) {
  const filteredEng = props.fhCarouselArray
    .filter((eng) => eng.original_language === "en")
    .slice(10)
  return (
    <div className="vh-100">
      <Carousel
        keyboard={true}
        slide={true}
        className="vw-100 vh-100 position-absolute top-0"
        controls={true}
        indicators={false}>
        {filteredEng.map((media, i) => {
          return (
            <Carousel.Item key={i} className="vw-100 vh-100" interval={5000}>
              <MyCarouselItem infoMedia={media} />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default FullHeigthCar
