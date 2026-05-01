import { Col } from "react-bootstrap"

const SingleSlide = function (props) {
  return (
    <Col className="p-0">
      <img className="w-100" src={props.slideLink} alt="" />
    </Col>
  )
}

export default SingleSlide
