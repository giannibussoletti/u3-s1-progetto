// Source - https://stackoverflow.com/a/78092703
// Posted by Darshan Kalli
// Retrieved 2026-05-01, License - CC BY-SA 4.0

import { Carousel } from "react-bootstrap"

const Prova = function () {
  return (
    <div className="Prova">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://placecats.com/400/400" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://placecats.com/400/400" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://placecats.com/400/400" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Prova
