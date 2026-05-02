import { Col } from "react-bootstrap"

const SingleSlide = function (props) {
  return (
    <Col className="p-0">
      <img
        className="w-100"
        src={"http://image.tmdb.org/t/p/" + "w342/" + props.slideLink}
        alt=""
        id={props.uniqueId}
      />
    </Col>
  )
}

export default SingleSlide
