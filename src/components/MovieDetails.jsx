import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"

const MovieDetails = () => {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=77aa006d&i=${imdbID}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nella fetch")
        }
      })
      .then((data) => {
        setMovie(data)
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error)
      })
  }, [imdbID])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          {movie && (
            <Card className="text-center my-3">
              <Card.Img
                variant="top"
                src={
                  movie.Poster !== "N/A" ? movie.Poster : "/default-poster.jpg"
                }
                alt={movie.Title}
              />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Plot}</Card.Text>
                <Card.Text>
                  <Badge bg="info fs-6">{movie.Year}</Badge>
                </Card.Text>
                <Link to="/" className="btn btn-warning">
                  Torna alla lista!
                </Link>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
