import React from "react"
import { Button } from "react-bootstrap"

const Settings = () => {
  return (
    <main>
      <div className="container my-5">
        <h2>Account</h2>
        <div className="row border-bottom py-3 align-items-center">
          <div className="col-4 col-md-4 fw-bold text-secondary">
            MEMBERSHIP & BILLING
          </div>
          <div className="col-4 col-md-4">
            <p className="mb-1 fw-bold">student@strive.school</p>
            <p className="mb-1 text-secondary">Password: ********</p>
            <p className="mb-1 text-secondary">Phone: 321 044 1279</p>
            <p className="fw-bold">
              <i class="bi bi-paypal"></i>
              admin@strive.school
            </p>
          </div>
          <div className="col-4 col-md-4 text-end">
            <a href="#" className="d-block text-decoration-none">
              Change account email
            </a>
            <a href="#" className="d-block text-decoration-none">
              Change password
            </a>
            <a href="#" className="d-block text-decoration-none">
              Change phone number
            </a>
            <a href="#" className="d-block text-decoration-none">
              Update payment info
            </a>
            <a href="#" className="d-block text-decoration-none">
              Billing details
            </a>
            <a href="#" className="d-block text-decoration-none">
              Redeem gift card or promo code
            </a>
            <a href="#" className="d-block text-decoration-none">
              Where to buy gift cards
            </a>
          </div>
          <div className="col-12 mt-3">
            <Button variant="outline-dark" size="sm">
              Cancel Membership
            </Button>
          </div>
        </div>
        <div className="row border-bottom py-3 align-items-center">
          <div className="col-4 col-md-4 fw-bold text-secondary">
            PLAN DETAILS
          </div>
          <div className="col-4 col-md-4">
            <p className="mb-0 fw-bold">
              Premium <span className="badge bg-dark">ULTRA HD</span>
            </p>
          </div>
          <div className="col-4 col-md-4 text-end">
            <a href="#" className="text-decoration-none">
              Change plan
            </a>
          </div>
        </div>
        <div className="row border-bottom py-3">
          <div className="col-6 col-md-4 fw-bold text-secondary">SETTINGS</div>
          <div className="col-6 col-md-8">
            <a href="#" className="d-block text-decoration-none">
              Parental controls
            </a>
            <a href="#" className="d-block text-decoration-none">
              Test participation
            </a>
            <a href="#" className="d-block text-decoration-none">
              Manage download devices
            </a>
            <a href="#" className="d-block text-decoration-none">
              Activate a device
            </a>
            <a href="#" className="d-block text-decoration-none">
              Recent device streaming activity
            </a>
            <a href="#" className="d-block text-decoration-none">
              Sign out of all devices
            </a>
          </div>
        </div>
        <div className="row py-3 align-items-center">
          <div className="col-12 col-md-4 fw-bold text-secondary">
            MY PROFILE
          </div>
          <div className="col-4 col-md-4 d-flex align-items-center w-25">
            <img src="/avatar.png" alt="Profile" className="me-2 w-25" />
            <span className="fw-bold">Strive Student</span>
          </div>
          <div className="col-4 col-md-4 text-end">
            <a href="#" className="d-block text-decoration-none">
              Manage profiles
            </a>
            <a href="#" className="d-block text-decoration-none">
              Add profile email
            </a>
          </div>
          <div className="col-md-4"></div>
          <div className="col-4 col-md-8 mt-3">
            <a href="#" className="d-block text-decoration-none">
              Language
            </a>
            <a href="#" className="d-block text-decoration-none">
              Playback settings
            </a>
            <a href="#" className="d-block text-decoration-none">
              Subtitle appearance
            </a>
            <a href="#" className="d-block text-decoration-none">
              Viewing activity
            </a>
            <a href="#" className="d-block text-decoration-none">
              Ratings
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Settings
