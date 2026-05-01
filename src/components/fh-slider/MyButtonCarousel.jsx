import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"

const MyButtonSlider = function (props) {
  return (
    <Button variant={props.variant} className={props.btnClass}>
      <FontAwesomeIcon icon={props.icon} /> {props.text}
    </Button>
  )
}
export default MyButtonSlider
