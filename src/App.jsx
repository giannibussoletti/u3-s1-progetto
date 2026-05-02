// MAIN IMPORT
/* #region  */
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavBar from "./components/MyNavBar"
import SliderMedia from "./components/SliderMedia"
import FullHeigthCar from "./components/FullHeigthCar"
import FooterColComponent from "./components/FooterColComponent"
import { Col, Container, Row, Button } from "react-bootstrap"
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
      footerIcon: ["facebook", "instagram", "twitter", "youtube"],
      firstColFooter: ["Audio and Subtitles", "Media Center", "Privacy", "Contact Us"],
      secondColFooter: ["Audio Dcscription", "Investor Relations", "Legal Notices"],
      thirdColFooter: ["Help Center", "Jobs", "Cookie Preferences"],
      fourthColFooter: ["Gift Cards", "Terms of Use", "Corporate Information"],
    },
  }

  /* #region  */
  popularMovie = "https://api.themoviedb.org/3/movie/popular?language=it-IT&page=1"
  popularTV = "https://api.themoviedb.org/3/tv/popular?language=it-IT&page=1"
  searchMethod = "https://api.themoviedb.org/3/tv/top_rated?language=it-IT&page=1"

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
          <SliderMedia title="Top Rated" array_path={this.state.information.image2.slice(0, 15)} />
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
                    size="2xl"
                    className="me-3"
                    icon={"fa-2x fa-brands fa-" + icon}
                    style={{ color: "#808080" }}
                    key={"fa-2x fa-brands fa-square-" + icon}
                  />
                ))}
              </Col>
              <FooterColComponent footerLinks={this.state.information.firstColFooter} />
              <FooterColComponent footerLinks={this.state.information.secondColFooter} />
              <FooterColComponent footerLinks={this.state.information.thirdColFooter} />
              <FooterColComponent footerLinks={this.state.information.fourthColFooter} />
            </Row>

            <Row xs={1} className="text-center text-md-start">
              <Col className="mt-4">
                <Button variant="outline-secondary" className="rounded-0 border-2 border-secondary">
                  Service Code
                </Button>
              </Col>
              <Col className="pt-4 text-light text-opacity-75">
                <p>&#169; 1997-2019 Netflix, inc.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}

export default App
