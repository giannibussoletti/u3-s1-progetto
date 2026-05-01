// MAIN IMPORT
/* #region  */
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavBar from "./components/MyNavBar"
import SliderMedia from "./components/SliderMedia"
import FullHeigthCar from "./components/FullHeigthCar"

// FONTAWESOME IMPORT
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { Component } from "react"
library.add(fas, far, fab)
/* #endregion */

// Fetch
const popular = "https://api.themoviedb.org/3/tv/popular?language=it-IT&page=2"
// const configuration = "https://api.themoviedb.org/3/configuration"
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg",
  },
}

class App extends Component {
  state = {
    information: {
      image: [],
    },
  }

  fetching = () => {
    fetch(popular, options)
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
            image: data.results,
          },
        })
      })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.fetching()
  }

  render() {
    return (
      <div className="bg-black">
        <header className="position-relative vh-100">
          <MyNavBar />
          <FullHeigthCar />
        </header>
        <main>
          <SliderMedia array_path={this.state.information.image} />
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App
