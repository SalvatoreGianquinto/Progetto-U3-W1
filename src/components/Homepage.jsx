import React, { Component } from "react"
import MovieGallery from "./MovieGallery"

class HomePage extends Component {
  render() {
    return (
      <main className="container-fluid py-4 bg-dark">
        <MovieGallery sagaName="Star Wars" />
        <MovieGallery sagaName="Shrek" />
        <MovieGallery sagaName="The Walking Dead" />
        <MovieGallery sagaName="One Piece" />
        <MovieGallery sagaName="Naruto" />
        <MovieGallery sagaName="Harry Potter" />
      </main>
    )
  }
}

export default HomePage
