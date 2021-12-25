import Image from 'next/image'
import Newsletter from './Newsletter'

function Body() {
  return (
    <>
      <div className="home-page">


        {/*TOP IMAGE SECTION*/}
        <div className="container top-section wrapper" style={{backgroundImage: `url("./home-page/bored-ape.png")`}}>
          <div className="row text-overlay">
            <div className="col-lg-12 header">
              {/*<img className="landing-page-img" id="logo" src={"./home-page/bored-ape.png"}/>*/}
              <h1 className="welcome-text">Welcome to wallstreet don</h1>
              <button className="home-btn btn ">Explore</button>
            </div>
          </div>
        </div>

        {/*SECTION SECTION(PLAIN TEXT)*/}

        <div className="container home-page-intro">
          <div className="row">
            <div className="col-lg-12">
              <p>
                If you want to skip calling the AJAX method from the 
                backend and only call it from the frontend, you can 
                test if the method calling from the frontend or the backend, 
                If you want to skip calling the AJAX method from the 
                backend and only call it from the frontend, you can 
                test if the method calling from the frontend or the backend like so
              </p>
            </div>
          </div>
        </div>



        {/*HR LINE*/}
        <div className="container hr-line">
          <div className="row">
            <div className="col-lg-12">

            </div>
          </div>
        </div>



        {/*OUR JOURNEY*/}
        <div className="container our-journey">
          <div className="row">
            <div className="col-lg-12">
              <h1>our journey</h1>

              <p>
                If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backend, 
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backe
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backend, 
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backe
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backend, 
                  If you want to skip calling the AJAX method from the 
                  backend and only call it from the frontend, you can 
                  test if the method calling from the frontend or the backe
              </p>
            </div>
          </div>
        </div>


        {/*PRODUCTS*/}


        {/*LITTLE TEXT BELOW PRDUCTS*/}
        <div className="container below-products">
          <div className="row">
            <div className="col-lg-12">
              <p>If you want to skip calling the AJAX method from the 
              backend and only call it from the frontend, you can 
              test if the method calling from the frontend or the backend, 
              If you want to skip calling the AJAX method from the </p>
            </div>
          </div>
        </div>


        <Newsletter />



      </div>
    </>
  );
}

export default Body;
