import "bootstrap/dist/css/bootstrap.min.css"

import { Component } from "react"
import Home from "./Home"
import Footer from "./Footer"
import MyNavBar from "./components/MyNavBar"
import LoginPage from "./LoginPage"
import LoginNavBar from "./components/LoginPageComponents/LoginNavBar"
import Settings from "./Settings"

// Fetch

class App extends Component {
  state = {
    information: {
      image1: [],
      image2: [],
      image3: [],
      spinner1: true,
      spinner2: true,
      spinner3: true,
    },
  }

  Auth =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg"

  options = {
    headers: {
      Authorization: this.Auth,
    },
  }

  popularMovie = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  popularTV = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
  searchMethod = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"

  fetchingPopularMovie = () => {
    fetch(this.popularMovie, this.options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          console.log(response)

          throw new Error(response.status)
        }
      })
      .then((data) => {
        this.setState({
          information: {
            ...this.state.information,
            image1: data.results,
            spinner1: false,
          },
        })
      })
      .catch((err) => err)
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
            spinner2: false,
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
            spinner3: false,
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
      <div className="d-flex flex-column vh-100">
        <header className="position-relative">
          <MyNavBar />
        </header>
        <main className="bg-black">
          <Home
            spinner1={this.state.information.spinner1}
            spinner2={this.state.information.spinner2}
            spinner3={this.state.information.spinner3}
            posterArray1={this.state.information.image1}
            posterArray2={this.state.information.image2}
            posterArray3={this.state.information.image3}
          />
          {/* <Settings /> */}
        </main>

        {/* <header>  
          <LoginNavBar />
        </header>
        <main className="bg-black">
          <LoginPage />
        </main> */}

        <footer className="bg-black">
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App
