import { Dropdown } from "react-bootstrap"

const MenuLang = function (props) {
  return (
    <Dropdown.Item href="#/action-1" className="text-light link-dark" href="#">
      {props.lang}
    </Dropdown.Item>
  )
}
export default MenuLang
