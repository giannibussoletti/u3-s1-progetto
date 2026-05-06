import { Col, Container, Row, Image } from "react-bootstrap"
import { useParams } from "react-router"

const Details = function (props) {
  const params = useParams()
  const singleMedia = props.infoArray.find(
    (singleMedia) => params.uniqueId === singleMedia.id.toString(),
  )
  return (
    <Container
      fluid
      className="pb-4 details-bg text-white"
      style={{
        backgroundImage:
          "url(http://image.tmdb.org/t/p/" + "original/" + singleMedia.backdrop_path + ")",
      }}>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold fs-1">
              {singleMedia.title === undefined ? singleMedia.name : singleMedia.title}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={"http://image.tmdb.org/t/p/" + "w500/" + singleMedia.poster_path} />
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
    </Container>
  )
}
export default Details
