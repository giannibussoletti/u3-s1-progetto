import { Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"

const NavBarSearch = function (props) {
  const navigate = useNavigate()
  return (
    <>
      <Col
        xs={4}
        style={{ cursor: "pointer" }}
        className="p-0 my-2"
        onClick={() => {
          navigate("/details/" + (props.mediaType === "movie" ? "movie/" : "serie/") + props.id)
          props.setResults(null)
        }}>
        <Image className="w-100" src={"https://image.tmdb.org/t/p/w500" + props.poster} />
      </Col>
      <Col xs={8} className="p-0 ps-2 my-2">
        {" "}
        <h2
          style={{ fontSize: "1.1rem", cursor: "pointer" }}
          className="fw-bold"
          onClick={() => {
            navigate("/details/" + (props.mediaType === "movie" ? "movie/" : "serie/") + props.id)
            props.setResults(null)
          }}>
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
