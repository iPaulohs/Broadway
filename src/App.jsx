import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Busca from "./pages/Busca"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MovieDetails from "./components/Movie"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Busca />} />
        <Route path="/movie/:id" element={<MovieDetails />}  />
      </Routes>
      <Footer />
    </Router>
  )
}
