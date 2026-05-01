const NavBarElement = function (props) {
  const CustomTag = props.typeOf
  return (
    <CustomTag href="#" className={props.classObj}>
      {props.buttonName}
    </CustomTag>
  )
}
export default NavBarElement
