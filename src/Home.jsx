import SliderMedia from "./components/SliderMedia"
import FullHeigthCar from "./components/FullHeigthCar"
import { Component } from "react"

class Home extends Component {
  render() {
    return (
      <div className="bg-black">
        <main>
          <div className="vh-100">
            <FullHeigthCar />
          </div>
          <SliderMedia
            responseOK={this.props.spinner1}
            title="Popular Movie"
            array_path={this.props.posterArray1.slice(0, 15)}
          />

          <SliderMedia
            responseOK={this.props.spinner2}
            title="Top Rated"
            array_path={this.props.posterArray2.slice(0, 15)}
          />
          <SliderMedia
            responseOK={this.props.spinner3}
            title="TV Show"
            array_path={this.props.posterArray3.slice(0, 15)}
          />
        </main>
      </div>
    )
  }
}
export default Home
