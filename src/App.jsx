// MAIN IMPORT
/* #region  */
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavBar from "./components/MyNavBar"
import SliderMedia from "./components/SliderMedia"
import FullHeigthCar from "./components/FullHeigthCar"
import { Col, Container, Row } from "react-bootstrap"
import { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// FONTAWESOME IMPORT
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)
/* #endregion */

// Fetch

class App extends Component {
  state = {
    information: {
      image1: [],
      image2: [],
      image3: [],
      image4: [],
      footerIcon: ["facebook", "instagram", "twitter", "youtube"],
    },
  }

  /* #region  */
  popularMovie = "https://api.themoviedb.org/3/movie/popular?language=it-IT&page=1"
  popularTV = "https://api.themoviedb.org/3/tv/popular?language=it-IT&page=1"
  searchMethod = "https://api.themoviedb.org/3/search/movie?query=Avengers"

  /* #endregion */
  options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg",
    },
  }

  fetchingPopularMovie = () => {
    fetch(this.popularMovie, this.options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        this.setState({
          information: {
            ...this.state.information,
            image1: data.results,
          },
        })
      })
      .catch((err) => console.log(err))
  }

  fetchingSearch = () => {
    fetch(this.searchMethod, this.options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        this.setState({
          information: {
            ...this.state.information,
            image2: data.results,
          },
        })
      })
      .catch((err) => console.log(err))
  }

  fetchingPopularTV = () => {
    fetch(this.popularTV, this.options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        this.setState({
          information: {
            ...this.state.information,
            image3: data.results,
          },
        })
      })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.fetchingPopularMovie()
    this.fetchingPopularTV()
    this.fetchingSearch()
  }

  render() {
    return (
      <div className="bg-black">
        <header className="position-relative vh-100">
          <MyNavBar />
          <FullHeigthCar />
        </header>
        <main>
          <SliderMedia title="Discover" array_path={this.state.information.image2.slice(0, 15)} />
          <SliderMedia
            title="Popular Movie"
            array_path={this.state.information.image1.slice(0, 15)}
          />
          <SliderMedia title="TV Show" array_path={this.state.information.image3.slice(0, 15)} />
        </main>
        <footer>
          <Container>
            <Row className="text-center text-md-start" xs={1} sm={2} md={4}>
              <Col className="w-100 my-5">
                {this.state.information.footerIcon.map((icon) => (
                  <FontAwesomeIcon
                    className="me-3"
                    icon={"fa-brands fa-square-" + icon + " fa-2xl"}
                    style={{ color: "#808080" }}
                  />
                ))}
              </Col>
              <Col>Pezzi di footer</Col>
            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}

export default App
