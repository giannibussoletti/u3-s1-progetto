import FullHeigthCar from "./Home/FullHeigthCar"
import SliderMedia from "./Home/SliderMedia"

const Movies = function (props) {
  return (
    <>
      <FullHeigthCar fhCarouselArray={props.fhCarouselArray} />
      <SliderMedia
        responseOK={props.spinner1}
        title="Fresh Movies"
        array_path={props.posterArray1.slice(0, 10)}
      />
      <SliderMedia
        responseOK={props.spinner1}
        title="Top Rated"
        array_path={props.posterArray1.slice(11)}
      />
    </>
  )
}

export default Movies
