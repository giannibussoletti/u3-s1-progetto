import { Col, Container, Row, Image } from "react-bootstrap"
import { useParams } from "react-router"

const Details = function (props) {
  const params = useParams()
  const singleMedia = props.infoArray.find(
    (singleMedia) => params.uniqueId === singleMedia.id.toString(),
  )
  return (
    <>
      <Container className="position-relative text-white main-container-details">
        <Row>
          <Col>
            <h1 style={{ fontSize: "3em" }} className="text-center fw-bold my-4">
              {singleMedia.title === undefined ? singleMedia.name : singleMedia.title}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className="text-center">
            <Image
              fluid
              className="shadow-lg mb-4"
              src={"http://image.tmdb.org/t/p/" + "w342" + singleMedia.poster_path}
            />
          </Col>
          <Col>
            <p style={{ lineHeight: "2em" }} className="bg-black p-3 rounded-2 bg-opacity-75">
              {singleMedia.plotSummary === undefined
                ? singleMedia.overview
                : singleMedia.plotSummary}
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="media-details-bg">
        <Row>
          <Col>
            <Image src={"http://image.tmdb.org/t/p/" + "original/" + singleMedia.backdrop_path} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Details
