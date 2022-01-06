import Link from "next/link"
import Image from "next/image"
import Head from "next/head";
import Header from "../components/Header"

export default function about() {
  return (
    <>
      <Head>
        <title>Wallstreet Don - About Us</title>
      </Head>

      <Header />
      
      <div className="first-about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={"test-image.jpg"} />
            </div>

            <div className="col-lg-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="second-about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              </p>
            </div>
            <div className="col-lg-6">
              <img src={"test-image.jpg"} />
            </div>

          </div>
        </div>
      </div>
 
      <div className="third-about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={"test-image.jpg"} />
            </div>

            <div className="col-lg-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}