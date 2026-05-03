import SliderMedia from "./components/Home/SliderMedia"
import FullHeigthCar from "./components/Home/FullHeigthCar"
import { Component } from "react"

class Home extends Component {
  render() {
    console.log
    return (
      <div className="bg-black">
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
      </div>
    )
  }
}
export default Home
