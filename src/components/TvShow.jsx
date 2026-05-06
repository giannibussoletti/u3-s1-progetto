import SliderMedia from "./Home/SliderMedia"

const TvShow = function (props) {
  return (
    <>
      <SliderMedia
        responseOK={props.spinner3}
        title="TV Show"
        array_path={props.posterArray3.slice(0, 10)}
      />
      <SliderMedia
        responseOK={props.spinner3}
        title="Serie da Rivivere"
        array_path={props.posterArray3.slice(11)}
      />
    </>
  )
}

export default TvShow
