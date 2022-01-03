import Link from "next/link"
import Image from "next/image"
import Head from "next/head";
import Header from "../components/Header"

export default function Nft() {
  return (
    <>
      <Head>
        <title>Wallstreet Don - Nfts</title>
      </Head>

      <Header />
      
      {/*FORST SECTION*/}
      <div className="first-nft-section">
	    	<div className="container first-container">
					<div className="row">
						<div className="col-lg-6">
							<h2>Welcome to walstreet don</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
								ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
								anim id est laborum
								</p>
						</div>

						<div className="col-lg-6">
							<div className="row rows">
								<div className="col-lg-6">
									<img src={"test-image.jpg"} width={150} height={150} />
								</div>
								<div className="col-lg-6">
									<img src={"test-image.jpg"} width={150} height={150} />
								</div>
								<div className="col-lg-6">
									<img src={"test-image.jpg"} width={150} height={150} />
								</div>
								<div className="col-lg-6">
									<img src={"test-image.jpg"} width={150} height={150} />
								</div>
							</div>
						</div>

					</div>
				</div>
	    </div>

	  	{/*SECOND SECTION*/}
	  	<div className="second-nft-section">
	    	<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<img src={"test-image.jpg"} />
						</div>

						<div className="col-lg-6">
							<h2>Welcome to walstreet don</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
								ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
								anim id est laborum
								</p>
						</div>

					</div>
				</div>
	    </div>

		  {/*THIRD SECTION*/}
		  <div className="third-nft-section">
	      <div className="container">
	      	<div className="row">
	      		<div className="col-lg-12">
	      			<h1>welcome to the club</h1>
	      			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
								ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
							</p>
	      		</div>
	      	</div>
	      </div>
	     </div>

	   {/*FIFTH SECTION*/}
	  <div className="first-nft-section">
	    	<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<h2>the team</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
								ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
								anim id est laborum
								</p>
						</div>

						<div className="col-lg-6">
							<div className="row rows">
								<div className="col-lg-6">
									<img src={"test-image.jpg"} width={150} height={150} />
								</div>
								<div className="col-lg-6">
									<img src={"test-image.jpg"} width={150} height={150} />
								</div>
								<div className="col-lg-6">
									<img src={"test-image.jpg"} width={150} height={150} />
								</div>
								<div className="col-lg-6">
									<img src={"test-image.jpg"} width={150} height={150} />
								</div>
							</div>
						</div>

					</div>
				</div>
	    </div> 

    </>
  )
}