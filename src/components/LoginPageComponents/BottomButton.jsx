import { Button, Col } from "react-bootstrap"

const BottomButton = function (props) {
  return (
    <Col xs={12} md={3} className="p-0">
      <Button variant="outline-secondary rounded-0 border-2 px-4 w-100">{props.button}</Button>
    </Col>
  )
}

export default BottomButton
