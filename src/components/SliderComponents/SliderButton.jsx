import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SliderButton = function (props) {
  const buttonSliderClass =
    "p-0 position-absolute top-0 text-end h-100 d-flex justify-content-center align-items-center"

  return (
    <span
      style={{ width: "5%" }}
      className={
        "arrow-" + props.arrowDirection + " " + props.arrowPosition + "-0 " + buttonSliderClass
      }>
      <FontAwesomeIcon
        icon={"fa-solid fa-angle-" + props.arrowDirection + " fa-2x"}
        className="mt-5"
        style={{
          color: "rgb(255, 255, 255)",
          width: "100px",
          height: "50px",
          "line-height": "1.5em",
        }}
      />
    </span>
  )
}

export default SliderButton
