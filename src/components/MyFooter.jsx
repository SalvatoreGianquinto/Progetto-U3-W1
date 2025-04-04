import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <ul className="list-unstyled text-secondary">
              <li>Audio and Subtitles</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul className="list-unstyled text-secondary">
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul className="list-unstyled text-secondary">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul className="list-unstyled text-secondary">
              <li>Gift cards</li>
              <li>Term of Use</li>
              <li>Corporate Information</li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button className="btn">Service Code</Button>
          <p className="mt-2 text-secondary">
            &copy; 1997-2019 Netflix, Inc. (i-00df0tcd2fdfe0c0e)
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default MyFooter
