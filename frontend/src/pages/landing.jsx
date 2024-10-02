import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {

  const router = useNavigate();

  return (
    <diV className="landingPageContainer">
      <nav>
      <div className='navHeader'>
                    <h2>Apna Video Call</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
      </nav>

      <div className="landingMainContainer">
        <diV>
          <h1 style={{ paddingTop: "6vw", width: "auto", fontSize: "2.2rem" }}>
            <span style={{ color: "yellow" }}>Connect</span> with your loved
            Ones
          </h1>
          <p>with WOW</p>
          <diV role="button">
            <Link
              to={"/auth"}
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              Get Started
            </Link>
          </diV>
        </diV>
        <div>
          <img
            src="/video.jpg"
            alt=""
            style={{ height: "35vw", width: "50vw" }}
          ></img>
        </div>
      </div>
    </diV>
  );
}
