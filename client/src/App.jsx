import { Route, Routes } from "react-router-dom"
import { Footer } from "./Components/Footer"
import { Home } from "./Components/Home"
import { Write } from './Components/Write'
import { Contact } from './Components/Contact'
import { Navbar } from "./Components/Navbar"
import { NotFound } from "./helpers/NotFound"
import { Suspense } from 'react'


function App() {


  return (
    <div className="App font-body bg-gray-50">
      <Navbar />
      <Suspense fallback={<div className="container">Loading....</div>}>
        <Routes>
          <Route exact path='/' index element={<Home />}/>
          <Route exact path='/write' element={<Write />}/>
          <Route exact path='/contact' element={<Contact />}/>
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
