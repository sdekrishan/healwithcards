import { Routes, Route } from "react-router-dom"
import Remedies from "./pages/Remedies"
import Spells from "./pages/Spells"
import SwitchWords from "./pages/TarotReading"
import Rituals from "./pages/Rituals"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TarotReading from "./pages/TarotReading"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tarot-reading" element={<TarotReading/>}/>
      <Route path="/remedies" element={<Remedies/>}/>
      <Route path="/spells" element={<Spells/>}/>
      <Route path="/rituals" element={<Rituals/>}/>
      <Route path="/switch-words" element={<SwitchWords/>}/>
    </Routes>
    </>
  )
}

export default App
