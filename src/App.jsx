import { library } from "@fortawesome/fontawesome-svg-core"

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)

import "bootstrap/dist/css/bootstrap.min.css"
import MyNavBar from "./components/MyNavBar"

const App = function () {
  return (
    <>
      <header>
        <MyNavBar />
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}

export default App
