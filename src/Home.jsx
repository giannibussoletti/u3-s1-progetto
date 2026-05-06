import SliderMedia from "./components/Home/SliderMedia"
import FullHeigthCar from "./components/Home/FullHeigthCar"

const Home = function (props) {
  return (
    <div className="bg-black">
      <FullHeigthCar />

      <SliderMedia
        responseOK={props.spinner1}
        title="Popular Movie"
        array_path={props.posterArray1.slice(0, 15)}
      />

      <SliderMedia
        responseOK={props.spinner2}
        title="Top Rated"
        array_path={props.posterArray2.slice(0, 15)}
      />
      <SliderMedia
        responseOK={props.spinner3}
        title="TV Show"
        array_path={props.posterArray3.slice(0, 15)}
      />
    </div>
  )
}

export default Home
