import React from "react"
import { Dropdown, Form, Button } from "react-bootstrap"

const EditProfile = () => {
  return (
    <main className="bg-dark">
      <div className="text-center">
        <h1 className="border border-2 border-top-0 border-start-0 border-end-0">
          Edit Profile
        </h1>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row d-flex w-100">
          {/* Avatar */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <img src="/avatar.png" alt="avatar" className="w-50" />
          </div>

          {/* Form */}
          <div className="col-12 col-md-8">
            <p className="border border-2 p-2 bg-body-secondary text-dark px-3">
              Strive Student
            </p>

            {/* Dropdown Lingua */}
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-lingua"
                className="mb-3"
              >
                Seleziona Lingua
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-light border border-white">
                <Dropdown.Item href="#">Italiano</Dropdown.Item>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Français</Dropdown.Item>
                <Dropdown.Item href="#">Deutsch</Dropdown.Item>
                <Dropdown.Item href="#">Español</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <p className="fs-3 mb-3 text-light">Maturity Settings:</p>
            <span className="border border-2 p-2 d-block w-100 w-md-auto text-light">
              ALL MATURITY RATINGS
            </span>
            <p className="my-4 text-light">
              Show titles of <strong>all maturity ratings</strong> for this
              profile.
            </p>
            {/* Cliccando "EDIT" nella pagina browser si passa ai SETTING */}
            <a href="./settings.html">
              <span className="text-secondary border border-2 border-secondary px-5 py-2 d-block d-md-inline-block">
                EDIT
              </span>
            </a>

            {/* Autoplay Controls */}
            <p className="fs-3 my-3 text-light">Autoplay controls</p>
            <div className="d-flex flex-column gap-3">
              <Form.Check
                type="checkbox"
                id="autoplayNext"
                label="Autoplay next episode in a series on all devices."
                defaultChecked
                className="text-light"
              />
              <Form.Check
                type="checkbox"
                id="autoplayPreviews"
                label="Autoplay previews while browsing on all devices."
                defaultChecked
                className="text-light"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
        <Button
          variant="dark"
          className="border border-1 border-light px-5 py-2 text-center"
        >
          SAVE
        </Button>
        <Button
          variant="dark"
          className="text-secondary border border-2 border-secondary px-5 py-2 text-center"
        >
          CANCEL
        </Button>
        <Button
          variant="dark"
          className="text-secondary border border-2 border-secondary px-5 py-2 text-center"
        >
          DELETE PROFILE
        </Button>
      </div>
    </main>
  )
}

export default EditProfile
