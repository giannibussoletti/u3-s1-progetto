// FONTAWESOME IMPORT
import { library } from "@fortawesome/fontawesome-svg-core"

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)

// MAIN IMPORT
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavBar from "./components/MyNavBar"
// import Prova from "./components/Prova"
// import FullHeigthCar from "./components/FullHeigthCar"
import SliderMedia from "./components/SliderMedia"

const App = function () {
  return (
    <div className="bg-black">
      <header className="position-relative">
        {/*vh-100*/}
        <MyNavBar />
        {/* <FullHeigthCar /> */}
      </header>
      <main>
        <SliderMedia />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
