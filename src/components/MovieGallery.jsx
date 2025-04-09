import React, { Component } from "react"
import { Alert, Button, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom" // Aggiungi import per il Link
import "bootstrap-icons/font/bootstrap-icons.css"

class MovieGallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  }

  galleryRef = React.createRef() // Riferimento al contenitore della galleria

  componentDidMount() {
    const { sagaName } = this.props
    const URL = `http://www.omdbapi.com/?apikey=77aa006d&s=${sagaName}`

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nella fetch")
        }
      })
      .then((data) => {
        if (data.Search) {
          this.setState({
            movies: data.Search,
            isLoading: false,
          })
        } else {
          throw new Error("Nessun film trovato")
        }
      })
      .catch((err) => {
        console.log("Errore nel fetch:", err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  scroll = (direction) => {
    const scrollAmount = direction * 215
    if (this.galleryRef.current) {
      this.galleryRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  render() {
    const { sagaName } = this.props
    const { movies, isLoading, isError } = this.state

    if (isLoading) {
      return (
        <section className="position-relative">
          <h2 className="text-light">{sagaName}</h2>
          <div className="text-center">
            <Spinner animation="border" variant="light" />
            <div className="mt-3">Caricamento...</div>
          </div>
        </section>
      )
    }

    if (isError) {
      return (
        <section className="position-relative">
          <h2 className="text-light">{sagaName}</h2>
          <div className="text-center text-danger">
            <Alert variant="danger">
              <i className="bi bi-patch-exclamation-fill me-2"></i>
              Si è verificato un errore durante il caricamento dei film. Riprova
              più tardi.
              <i className="bi bi-patch-exclamation-fill me-2"></i>
            </Alert>
          </div>
        </section>
      )
    }

    return (
      <section className="position-relative">
        <h2 className="text-light">{sagaName}</h2>
        <div
          ref={this.galleryRef}
          className="d-flex gap-3 py-2 overflow-hidden"
          style={{ scrollBehavior: "smooth", padding: "10px 0" }}
        >
          {movies.map((movie) => (
            <div key={movie.imdbID} style={{ minWidth: "200px" }}>
              <Link to={`/movie-details/${movie.imdbID}`}>
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "/default-poster.jpg"
                  }
                  alt={movie.Title}
                  className="img-fluid rounded"
                  style={{
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)"
                  }}
                />
                <p className="text-light mt-2">
                  <strong>{movie.Title}</strong>
                </p>
              </Link>
            </div>
          ))}
        </div>
        <Button
          variant="light"
          className="position-absolute top-50 start-0 translate-middle-y"
          style={{ left: "10px" }}
          onClick={() => this.scroll(-1)}
        >
          &lt;
        </Button>
        <Button
          variant="light"
          className="position-absolute top-50 end-0 translate-middle-y"
          style={{ right: "10px" }}
          onClick={() => this.scroll(1)}
        >
          &gt;
        </Button>
      </section>
    )
  }
}

export default MovieGallery
