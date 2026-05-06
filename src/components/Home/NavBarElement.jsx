import { useLocation } from "react-router"

const NavBarElement = function (props) {
  const location = useLocation()

  const CustomTag = props.typeOf
  return (
    <CustomTag
      className={props.classObj + (location.pathname === props.pageLink ? " active" : "")}
      to={"/" + props.pageLink}>
      {props.buttonName}
    </CustomTag>
  )
}
export default NavBarElement
