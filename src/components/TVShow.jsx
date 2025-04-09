import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const TVShows = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=77aa006d&s=star")
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search)
        }
      })
      .catch((err) => console.error("Errore nel fetch:", err))
  }, [])

  return (
    <Container className="mt-4">
      <h2 className="text-light mb-4">TV Shows</h2>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col xs={12} md={6} lg={4} key={movie.imdbID}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={
                  movie.Poster !== "N/A" ? movie.Poster : "/default-poster.jpg"
                }
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>Anno: {movie.Year}</Card.Text>
                <Link
                  to={`/movie-details/${movie.imdbID}`}
                  className="mt-auto btn btn-primary"
                >
                  Dettagli
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TVShows
