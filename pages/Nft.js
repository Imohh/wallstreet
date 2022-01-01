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
      <div className="first-nft-section">
    	<div className="container">
			<div className="row">
				<div className="col-lg-6">
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