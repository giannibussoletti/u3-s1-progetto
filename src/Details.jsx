import { useEffect, useState } from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import { useParams } from "react-router"

const Details = function () {
  const [movieDetails, setMovieDetails] = useState({})

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
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        setMovieDetails(data)
      })
      .catch((err) => err)
  }

  useEffect(() => {
    MultiFetching()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container
        fluid
        className=" mb-5 position-relative text-white main-container-details overflow-hidden h-100">
        <Container>
          <Row cl>
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
          </Row>
        </Container>
        <Image
          align="center"
          className="media-details-bg px-0 w-100"
          src={"http://image.tmdb.org/t/p/" + "original/" + movieDetails.backdrop_path}
        />
      </Container>
    </>
  )
}
export default Details
