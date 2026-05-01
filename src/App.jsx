// MAIN IMPORT
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

// Fetch
const popular = "https://api.themoviedb.org/3/tv/popular?language=it-IT&page=1"
const configuration = "https://api.themoviedb.org/3/configuration"
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

  // fetchingConfiguration = () => {
  //   fetch(configuration, options)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json()
  //       } else {
  //         throw new Error(response.status)
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       // this.setState({
  //       //   image: popular + data.results[1].backdrop_path,
  //       // })
  //     })
  //     .catch((err) => console.log(err))
  // }

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
        console.log(data.results)
        this.setState({
          information: {
            image: "http://image.tmdb.org/t/p/" + "w342/" + data.results[1].poster_path,
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
          <img src={this.state.information.image} alt="eerwe" />
          <SliderMedia />
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App
