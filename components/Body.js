import Image from 'next/image'

function Body() {
  return (
    <>
      <div className="home-page">


        <div className="container top-section wrapper" style={{backgroundImage: `url("./home-page/bored-ape.png")`}}>
          <div className="row text-overlay">
            <div className="col-lg-12 header">
              {/*<img className="landing-page-img" id="logo" src={"./home-page/bored-ape.png"}/>*/}
              <h1 className="welcome-text">Welcome to wallstreet don</h1>
              <button className="home-btn welcome-text">Explore</button>
            </div>
          </div>
        </div>





      </div>
    </>
  );
}

export default Body;