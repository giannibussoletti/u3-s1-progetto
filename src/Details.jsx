import { useEffect, useState } from "react"
import { Col, Container, Row, Image, Button } from "react-bootstrap"
import { useParams } from "react-router"

const Details = function () {
  const [movieDetails, setMovieDetails] = useState()
  const [isData, setIsData] = useState(false)
  const params = useParams()

  const Auth =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg"

  const options = {
    headers: {
      Authorization: Auth,
    },
  }

  const movieLink = "https://api.themoviedb.org/3/movie/"
  const TvShowLink = "https://api.themoviedb.org/3/tv/"

  const MultiFetching = () => {
    fetch(
      params.mediaType === "movie" ? movieLink + params.uniqueId : TvShowLink + params.uniqueId,
      options,
    )
      .then((response) => {
        if (response.ok) {
          console.log(params.mediaType)
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        setMovieDetails(data)
        console.log("data")
      })
      .catch((err) => err)
  }

  useEffect(() => {
    console.log("Effect")
    MultiFetching()
  }, [])

  return (
    <Container
      fluid
      className=" mb-5 position-relative text-white main-container-details overflow-hidden h-100">
      <Container>
        {console.log("render")}
        <Row className="my-4 bg-black p-4">
          <Col sm={12} md={6} className="text-center">
            <Image
              fluid
              className="shadow-lg mb-5"
              src={"http://image.tmdb.org/t/p/" + "w342" + movieDetails.poster_path}
            />
          </Col>
          <Col>
            <h2 className="text-uppercase fw-bold">
              {movieDetails.title === undefined ? movieDetails.name : movieDetails.title}
            </h2>

            <p>
              {movieDetails.plotSummary === undefined
                ? movieDetails.overview
                : movieDetails.plotSummary}
            </p>

            <Row className="my-4 align-items-center">
              <Col xs={12} md={8} className="mb-3 text-center">
                <Button
                  style={{ background: "#b20710" }}
                  className="rounded-5 border-0 fw-bold text-uppercase px-4">
                  Watch Trailer
                </Button>
              </Col>
              <Col className="d-flex justify-content-center">
                <span className="average-vote">
                  <h5 className="fw-bold pb-1">
                    {movieDetails.vote_average.toString().slice(0, 3)}
                  </h5>
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className="text-center">
                  {movieDetails.first_air_date.toString().slice(0, 4)}
                </h6>
              </Col>
              <Col>{movieDetails.last_episode_to_air.runtime} min.</Col>

              <Col>
                {movieDetails.genres.map((genre) => {
                  return (
                    <h6 className="text-center" key={genre.name}>
                      {genre.name}
                    </h6>
                  )
                })}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Image
        align="center"
        className="media-details-bg px-0 w-100"
        src={"http://image.tmdb.org/t/p/" + "original/" + movieDetails.backdrop_path}
      />
    </Container>
  )
}
export default Details

{
  /* <Row>
            <Col>
              <h1 style={{ fontSize: "3em" }} className="text-center fw-bold my-4">
                {movieDetails.title === undefined ? movieDetails.name : movieDetails.title}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="text-center">
              <Image
                fluid
                className="shadow-lg mb-5"
                src={"http://image.tmdb.org/t/p/" + "w342" + movieDetails.poster_path}
              />
            </Col>
            <Col>
              <p style={{ lineHeight: "2em" }} className="bg-black p-3 rounded-2 bg-opacity-75">
                {movieDetails.plotSummary === undefined
                  ? movieDetails.overview
                  : movieDetails.plotSummary}
              </p>
            </Col>
          </Row> */
}
