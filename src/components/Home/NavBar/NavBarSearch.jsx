import { Col, Image } from "react-bootstrap"

const NavBarSearch = function (props) {
  return (
    <>
      <Col xs={4} className="p-0 my-2">
        <Image className="w-100" src={"https://image.tmdb.org/t/p/w500" + props.poster} />
      </Col>
      <Col xs={8} className="p-0 ps-2 my-2">
        {" "}
        <h2 style={{ fontSize: "1.1rem" }} className="fw-bold">
          {props.titleMovie ? props.titleMovie : props.titleSeries}
        </h2>
        <h3 style={{ fontSize: "1rem" }} className="m-0">
          {props.year}
        </h3>
        <h4 style={{ fontSize: "1rem" }} className="m-0">
          {props.mediaType}
        </h4>
      </Col>
    </>
  )
}
export default NavBarSearch
