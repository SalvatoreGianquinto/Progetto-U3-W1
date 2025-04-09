//
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import HomePage from "./components/Homepage"
//import Profile from "./components/Profile"
//import Settings from "./components/Settings"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TVShow from "./components/TVShow"
import MovieDetails from "./components/MovieDetails"

function App() {
  return (
    <BrowserRouter>
      <main className="d-flex flex-column min-vh-100">
        <MyNav tema="dark" />
        {/*<Profile />*/}
        {/*<Settings />*/}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tv-show" element={<TVShow />} />
            <Route path="movie-details/:imdbID" element={<MovieDetails />} />
          </Routes>
        </div>
        <MyFooter />
      </main>
    </BrowserRouter>
  )
}

export default App
