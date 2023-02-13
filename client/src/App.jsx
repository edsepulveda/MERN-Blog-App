import { Cards } from "./Components/Cards"
import { Footer } from "./Components/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"

function App() {

  return (
    <div className="App font-body bg-gray-50">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
